import React from 'react'
import HeadingCard from './HeadingCard'

function Blog() {
    const BlogData = [
        {
            id: 1,
            image: "blog-1.jpg",
            date: "18 Jul",
            category: "Doctor",
            title: "Doccure – Making your clinic visit painless",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            image: "blog-2.jpg",
            date: "22 Jul",
            category: "Healthcare",
            title: "How online appointments save your time",
            description:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        },
        {
            id: 3,
            image: "blog-3.jpg",
            date: "25 Jul",
            category: "Medical Tips",
            title: "5 things to check before choosing a doctor",
            description:
                "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
        },
        {
            id: 4,
            image: "blog-4.jpg",
            date: "30 Jul",
            category: "Clinic",
            title: "Why digital health records matter",
            description:
                "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae."
        }
    ];

    return (
        <div className='mt-5'>
            <HeadingCard heading="Our Recent Blog" subheading="Stay Updated With Our Latest Articles" />
            <div className='container mx-auto flex flex-wrap justify-evenly gap-5 p-2 '>
                {
                    BlogData.map((item) => (
                        <div className="flex flex-wrap max-w-xl overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition">

                            {/* Image */}
                            <div className="xl:w-70 md:w-50 max-sm:w-full">
                                <img
                                    src="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/11/blog-10.jpg"
                                    alt="Blog"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="xl:w-70 md:w-60  p-4">
                                <button className="mb-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                                    {item.category}
                                </button>

                                <h2 className="mb-2 text-lg font-semibold text-gray-800 leading-snug">
                                    {item.title}
                                </h2>

                                <p className="text-sm text-gray-500">
                                    {item.description}
                                </p>
                            </div>

                        </div>

                    ))
                }
                <div className='w-full flex justify-center'>
                    <button className='p-2 text-white bg-[#022042] text-sm  cursor-pointer hover:bg-blue-600 transition'>View More Articals</button>

                </div>
            </div>
        </div>
    )
}

export default Blog