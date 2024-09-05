import React from 'react';
import Navbar from '../components/navbar';

const AboutRoute = () => {
    return (
        <div style={{ backgroundColor: '#0c0c0c' }} className="text-white min-h-screen flex flex-col items-center">
            <Navbar />

            <section className="text-center py-16 px-4">
                <h1 className="text-4xl font-bold leading-tight">
                    We build bridges <br />
                    <span className="text-white">between</span> <span className="text-green-color">companies</span> <span className="text-white">and</span> <span className="text-green-color">customers</span>
                </h1>
                <p className="text-white mt-4">
                    To build software that gives customer-facing teams at <br />
                    small- and medium-sized businesses the ability to create <br />
                    fruitful and enduring relationships with customers.
                </p>
            </section>
            <section className="relative">
                <img src="https://placehold.co/1200x600" alt="Group of people working together in an office setting" className="w-full" />
            </section>
            <section className="py-16 px-8">
                <div className="flex flex-col md:flex-row items-start">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold">Together we are strong</h2>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <p className="text-white">
                            Our crew is always getting bigger, but we all work toward one goal: to make sales success not only possible but inevitable for teams everywhere.
                        </p>
                        <p className="text-white mt-4">
                            In 2022, at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 px-8 bg-green-color">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/4 flex items-center">
                        <img src="https://placehold.co/100x100" alt="Brandon Shaw, Founder & CEO" className="rounded-full" />
                        <div className="ml-4">
                            <p className="font-bold">Brandon Shaw</p>
                            <p className="text-white">Founder & CEO</p>
                        </div>
                    </div>
                    <div className="md:w-3/4 mt-8 md:mt-0">
                        <blockquote className="text-2xl font-bold text-white">
                            “Our goal is to build software that gives customer-facing teams at SMBs the ability to create fruitful and enduring relationships with customers.”
                        </blockquote>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default AboutRoute;