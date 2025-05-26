'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTerminal } from 'react-icons/fa'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    setLoading(true)
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setLoading(false)

    if (res.ok) {
      form.reset()
      setShowPopup(true)
      setTimeout(() => setShowPopup(false), 4000)
    } else {
      alert('Error sending email')
    }
  }

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {[
          { id: 'name', label: 'Enter your name:', type: 'text' },
          { id: 'email', label: 'Provide email:', type: 'email' },
          { id: 'subject', label: 'Message subject:', type: 'text' }
        ].map((field) => (
          <div key={field.id} className="flex items-start">
            <span className="text-blue-400 mr-2">{'>'}</span>
            <div className="flex-1">
              <label htmlFor={field.id} className="block text-cyan-400 mb-1">{field.label}</label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                className="w-full bg-gray-800 border-b border-gray-700 focus:border-green-400 outline-none text-white px-2 py-1"
                required
              />
            </div>
          </div>
        ))}

        <div className="flex items-start">
          <span className="text-blue-400 mr-2">{'>'}</span>
          <div className="flex-1">
            <label htmlFor="message" className="block text-cyan-400 mb-1">Type your message:</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 focus:border-green-400 outline-none text-white px-2 py-1 resize-none"
              required
            ></textarea>
          </div>
        </div>

        <div className="pt-4">
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-4 rounded flex items-center gap-2"
          >
            <FaTerminal />
            <span>{loading ? 'Sending...' : 'Execute Send'}</span>
          </motion.button>
        </div>
      </form>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-6 right-6 bg-gray-900 border border-green-500 text-green-400 font-mono p-4 rounded-lg shadow-lg z-50"
          >
            <div className="flex items-center space-x-2">
              <FaTerminal />
              <span>Email sent successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
