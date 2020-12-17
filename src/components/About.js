import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import background from '../background.jpg'
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import profilePic from '../profile pic.jpg'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
    return builder.image(source)
}
function About() {
    const [author, setAuthor] = useState(null)
    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage":image.asset->url
        }`).then((data) => setAuthor(data[0]))
            .catch(console.error)
    }, [])
    return (
        <main className="relative">
            <img src={background} alt="Background" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container max-auto relative">
                <section className="bg-green-800 rounded shadow-2xl lg:flex p-20">
                    <img src={profilePic} alt={author} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">Hey there. I'm {" "}
                            <span className="text-green-100">An Doan</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <p>Front End Developer</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About
