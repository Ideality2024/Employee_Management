import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-bold">My Project</h2>
                    <p className="text-sm">A description of my project.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold">Contact</h3>
                    <p className="text-sm">Email: example@example.com</p>
                    <p className="text-sm">Phone: 123-456-7890</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
