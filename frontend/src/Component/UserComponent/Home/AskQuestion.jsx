import React from 'react'
import HeadingCard from './HeadingCard'

function AskQuestion() {
    const AskQuestionArray = [
        {
            id: 1,
            heading: "How do I book a doctor appointment online?",
            description: "You can book an appointment by selecting a doctor, choosing an available time slot, and confirming your details through our online system."
        },
        {
            id: 2,
            heading: "Can I cancel or reschedule my appointment?",
            description: "Yes, you can cancel or reschedule your appointment from your dashboard before the scheduled time."
        },
        {
            id: 3,
            heading: "Is my personal and medical information secure?",
            description: "Absolutely. We use secure encryption and follow data protection standards to keep your information safe and confidential."
        },
        {
            id: 4,
            heading: "Do I need to create an account to book an appointment?",
            description: "Yes, creating an account helps you manage appointments, view history, and receive notifications easily."
        },
        {
            id: 5,
            heading: "Can I see doctor availability and specialization?",
            description: "Yes, you can view each doctor’s availability, specialization, and experience before booking an appointment."
        }
    ];

    return (
        <div>
            <HeadingCard heading="Get Your Answer" subheading="Frequently Asked Questions" />
            <div className='container mx-auto p-5'>
                {
                    AskQuestionArray.map((item) => (
                        <details class="group  mt-2 rounded-lg border-b border-gray-200 bg-white p-4 ">
                            <summary class="flex cursor-pointer items-center justify-between font-medium text-gray-800 list-none">
                                <span className='text-lg'>{item.heading}?</span>
                                <svg
                                    class="h-5 w-5 transform transition-transform duration-200 group-open:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>

                            <div class="mt-3  text-gray-600">
                                {item?.description}
                            </div>
                        </details>
                    ))
                }

            </div>
        </div>
    )
}

export default AskQuestion