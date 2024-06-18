"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import FileUploadSection from "@/components/FileUploadSection";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function MainPage() {
    return (
        <div className="bg-slate-950 min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 py-8 pt-24">  {/* Add pt-24 to create space for the fixed navbar */}
                <section className="text-center text-white mb-12">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Our Image Processing Hub</h1>
                    <p className="text-lg">
                        Discover cutting-edge technologies and techniques in image processing, from medical diagnostics to automated handwriting recognition.
                    </p>
                </section>
                {/* <FileUploadSection /> */}
                <section className="my-12">
                    <h2 className="text-2xl font-semibold text-white mb-6">Our Services</h2>
                    <div className="flex justify-center flex-wrap gap-6 mb-6">
                        <Card
                            title="Detection of Skin Cancer"
                            description="Early detection of skin cancer can significantly increase the chances of successful treatment. Regular skin checks and advanced imaging technologies help identify suspicious lesions."
                            imageUrl="/images/skincare.svg"
                            path="#"
                        />
                        <Card
                            title="Recognition of Handwriting "
                            description="Utilize advanced image processing techniques to accurately interpret and digitize handwritten text. Enhance data entry efficiency and accuracy with cutting-edge handwriting recognition technology."
                            imageUrl="/images/hand.png"
                            path="#"
                        />
                        <Card
                            title="Classification of Image Category"
                            description="Employ sophisticated algorithms to automatically classify images into predefined categories. Streamline content organization and retrieval with accurate image classification technology."
                            imageUrl="/images/category.svg"
                            path="#"
                        />
                    </div>
                </section>
                <section className="my-12">
                    <h2 className="text-2xl font-semibold text-white mb-6">Why Choose Us?</h2>
                    <div className="text-white">
                        <p className="mb-4">
                            Our team is dedicated to providing the most advanced and accurate image processing solutions. We utilize state-of-the-art technology and techniques to ensure the best results for our clients.
                        </p>
                        <ul className="list-disc pl-6">
                            <li className="mb-2">Highly accurate and reliable detection methods</li>
                            <li className="mb-2">Fast and efficient processing</li>
                            <li className="mb-2">User-friendly interface and seamless integration</li>
                        </ul>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
