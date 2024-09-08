
export default function FashionDashboard() {
    return (
        <div>
            <section className="py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Fashion</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800 rounded-md p-4 hover:bg-gray-700">
                            <img src="https://i.ibb.co/7X4b15t/illustration.png" alt="Fashion" className="w-full rounded-md" />
                            <p className="text-center mt-2">jeans </p>
                        </div>
                        <div className="bg-gray-800 rounded-md p-4 hover:bg-gray-700">
                            <img src="https://i.ibb.co/hV74vW8/electronics.jpg" alt="Electronics" className="w-full rounded-md" />
                            <p className="text-center mt-2">tshirt</p>
                        </div>
                        <div className="bg-gray-800 rounded-md p-4 hover:bg-gray-700">
                            <img src="https://i.ibb.co/gD5mK57/groceries.jpg" alt="Groceries" className="w-full rounded-md" />
                            <p className="text-center mt-2">cap</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}