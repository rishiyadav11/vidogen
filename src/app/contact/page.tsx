import Section from '@/components/Section'
import Heading from '@/components/Heading'
import React from 'react'
import Button from '@/components/Button'

const ContactPage = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden text-white">
      {/* Hero */}
      <Section className="py-28 bg-gradient-to-br from-n-8 to-n-7 text-center text-white relative overflow-hidden">
        <div className="container space-y-6 max-w-3xl mx-auto">
          <Heading title="Let’s Connect" tag="#MessageMoodOn" />
          <p className="text-lg text-n-3">
            Whether you have a question, feedback, or partnership idea — we're here to help. Drop us a message and we’ll respond within 24 hours.
          </p>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-color-1/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-24 bg-n-8 border-t border-n-6">
        <div className="container grid lg:grid-cols-2 gap-20 items-start">

          {/* Contact Form */}
          <div className="bg-n-8 border border-n-6 p-10 lg:p-14 rounded-3xl shadow-xl space-y-6">
            <Heading title="Send Us a Message" className="text-left" />
            <form className="space-y-8">
              {['Name', 'Email', 'Message'].map((label, i) => (
                <div key={i} className="relative group">
                  {label !== 'Message' ? (
                    <input
                      type={label === 'Email' ? 'email' : 'text'}
                      placeholder={`Your ${label}`}
                      className="peer w-full bg-transparent border-b border-n-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-color-1"
                      required
                    />
                  ) : (
                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      className="peer w-full bg-transparent border-b border-n-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-color-1"
                      required
                    />
                  )}
                  <label className="absolute left-0 top-2 text-n-4 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-n-5 peer-focus:top-2 peer-focus:text-sm peer-focus:text-color-1">
                    {label}
                  </label>
                </div>
              ))}

              <Button
                type="submit"

                className="w-full py-3 px-6"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Info Card */}
          <div className="bg-gradient-to-br from-n-7 to-n-8 border border-n-6 p-10 lg:p-14 rounded-3xl text-white shadow-xl space-y-8 backdrop-blur">
            <Heading title="Get in Touch" className="text-left" />
            <div className="space-y-4 text-n-3 text-sm">
              <div>
                <h4 className="font-semibold text-white mb-1">Office Address</h4>
                <p>San Francisco, CA<br />United States</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <p>
                  General: <a href="mailto:founders@usedash.ai" className="text-color-1"></a><br />
                  Support: <a href="mailto:founders@usedash.ai" className="text-color-1">founders@usedash.ai</a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                <p>Mon – Fri: 9am to 6pm PST</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Social</h4>
                <p className="space-x-4">
                  <a href="https://x.com/raidingAI" target="_blank" className="hover:text-color-1">Twitter</a>
                  <a href="https://www.linkedin.com/in/pranjali-awasthi-neuro/" target="_blank" className="hover:text-color-1">LinkedIn</a>
                  <a href="https://www.youtube.com/@usedashai" target="_blank" className="hover:text-color-1">YouTube</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default ContactPage
