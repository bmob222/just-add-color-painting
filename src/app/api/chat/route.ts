import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are a helpful AI assistant for Just Add Color Painting LLC, a professional painting company. You help answer questions about:

- Our painting services (interior, exterior, commercial, cabinet refinishing)
- Getting quotes and estimates
- Our process and what to expect
- Color consultation and recommendations
- Service areas and availability
- Pricing (provide general ranges, encourage them to get a free quote)

Company Info:
- Phone: (860) 936-6338
- Services: Interior Painting, Exterior Painting, Commercial Painting, Cabinet Refinishing
- We offer FREE quotes and color consultations
- Licensed, insured, and EPA Lead-Safe Certified
- We use premium paints from brands like Benjamin Moore and Sherwin-Williams

Be friendly, helpful, and professional. If asked about specific pricing, explain that it varies by project and encourage them to request a free quote. For urgent matters, recommend calling the phone number.

Keep responses concise and helpful. If you don't know something specific about the company, be honest and suggest they contact us directly.`

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    // Check if GROQ_API_KEY is set
    const apiKey = process.env.GROQ_API_KEY

    if (!apiKey) {
      // Fallback to simple responses if no API key
      return NextResponse.json({
        response: getSimpleResponse(message)
      })
    }

    // Build messages array
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history.map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: message }
    ]

    // Call Groq API (free Llama)
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      throw new Error('API request failed')
    }

    const data = await response.json()
    const aiResponse = data.choices[0]?.message?.content || 'I apologize, but I could not process your request. Please try again or call us at (860) 936-6338.'

    return NextResponse.json({ response: aiResponse })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json({
      response: 'I apologize, but I\'m having trouble right now. Please call us at (860) 936-6338 or fill out our contact form for assistance.'
    })
  }
}

// Simple fallback responses when no API key is configured
function getSimpleResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
    return "Pricing varies based on the size, condition, and complexity of your project. We'd be happy to provide a free, no-obligation quote! You can request one through our contact form or call us at (860) 936-6338."
  }

  if (lowerMessage.includes('quote') || lowerMessage.includes('estimate')) {
    return "We offer free estimates! You can fill out the quote request form on our Contact page, or give us a call at (860) 936-6338 to schedule a consultation."
  }

  if (lowerMessage.includes('service') || lowerMessage.includes('what do you')) {
    return "We offer a full range of painting services:\n\n• Interior Painting - bedrooms, living rooms, kitchens, and more\n• Exterior Painting - full house, trim, decks, and fences\n• Commercial Painting - offices, retail, restaurants\n• Cabinet Refinishing - kitchen and bathroom cabinets\n\nWould you like to know more about any specific service?"
  }

  if (lowerMessage.includes('hour') || lowerMessage.includes('open') || lowerMessage.includes('available')) {
    return "We're available Monday through Friday, 8am to 6pm. For quotes and consultations, give us a call at (860) 936-6338 or submit a request through our contact form!"
  }

  if (lowerMessage.includes('color') || lowerMessage.includes('paint')) {
    return "We offer free color consultations as part of our service! Our team can help you choose the perfect colors for your space. We use premium paints from Benjamin Moore and Sherwin-Williams for lasting, beautiful results."
  }

  if (lowerMessage.includes('area') || lowerMessage.includes('location') || lowerMessage.includes('where')) {
    return "We serve the Greater Metro Area and surrounding communities. Contact us at (860) 936-6338 to confirm service availability in your specific location!"
  }

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! Welcome to Just Add Color Painting. How can I help you today? I can answer questions about our services, provide information about getting a quote, or help with color recommendations!"
  }

  if (lowerMessage.includes('thank')) {
    return "You're welcome! If you have any other questions, feel free to ask. You can also reach us at (860) 936-6338 or through our contact form. We'd love to help with your painting project!"
  }

  return "Thanks for reaching out! I'm here to help with questions about our painting services, quotes, or color recommendations. For specific inquiries, you can also call us at (860) 936-6338 or fill out our contact form. What would you like to know?"
}
