export default function MaintenancePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
            <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md">
                <h1 className="text-3xl font-bold text-gray-800">We'll Be Back Soon!</h1>
                <p className="text-gray-600 mt-4">
                    Our customizer tool is currently undergoing maintenance. We’re working
                    hard to improve your experience.
                </p>

                {/* Loading Animation */}
                <div className="mt-6 flex justify-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
                </div>

                {/* ETA Counter */}
                <div className="mt-4 text-gray-700 text-sm">
                    Estimated time remaining: <span className="font-semibold">8 days</span>
                </div>

                <div className="mt-6">
                    <span className="inline-block text-sm text-gray-500">Stay updated:</span>
                    <div className="flex justify-center gap-3 mt-3">
                        <a href="#" className="text-blue-600 hover:underline text-sm">
                            Follow us on Twitter
                        </a>
                        <a href="#" className="text-blue-600 hover:underline text-sm">
                            Subscribe to Updates
                        </a>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-sm text-gray-500">Thank you for your patience!</p>
                </div>
            </div>
        </div>
    );
}
