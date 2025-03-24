"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What products does Woven Africa offer",
        answer:
            "Woven Africa specializes in high-quality, handcrafted Kente graduation stoles, embroidered sashes, and custom apparel. Our products celebrate African heritage and can be personalized with school logos, names, and messages for graduations, organizations, and special events. We also offer bulk production services for schools, businesses, and religious institutions.",
    },
    {
        question: "How do I place an order for a customized stole or sash?",
        answer:
            "You can order directly through our website using our customization tool to design your stole. For bulk orders (50+ stoles), reach out to us via email or WhatsApp for a tailored quote. To ensure timely delivery, we recommend:\n" +
            "\n" +
            "Individual orders: At least 3 weeks in advance\n" +
            "\n" +
            "Bulk orders (50+ stoles): 1-2 months ahead of your event\n",
    },
    {
        question: "How long does shipping take?",
        answer:
            "Shipping typically takes 5-7 business days within Ghana and 10-14 days for international orders.",
    },
    {
        question: "Can I cancel or modify my order?",
        answer:
            "Cancellations: Orders that have not been processed or customized can be canceled within 24 hours of purchase. Contact us immediately at contact@wovenafrica.com.\n" +
            "\n" +
            "Modifications: Custom orders cannot be modified after production begins, so please double-check your design before confirming.",
    },
    {
        question: "What are the shipping options and delivery times?",
        answer:
            "We offer fast and secure worldwide shipping through trusted carriers such as DHL, FedEx, and EMS. Delivery times vary based on location:\n" +
            "\n" +
            "Ghana & West Africa: 1-3 business days\n" +
            "\n" +
            "U.S., Europe & Other Regions: 3-5 business days\n" +
            "\n" +
            "\n" +
            "Note: International orders may be subject to customs fees, which are the buyer's responsibility."
    },
    {
        question: "Can I track my order?",
        answer:
            "Yes! Once your order is shipped, you will receive an email with a tracking number to monitor your package in real-time."
    },
    {
        question: "Does Woven Africa offer bulk discounts?",
        answer:
            "Yes! We offer tiered discounts for schools, universities, churches, and organizations ordering in large quantities. Contact us for a custom quote based on your order size."
    },
    {
        question: "Does Woven Africa offer an Ambassador or Affiliate Program?",
        answer:
            "Yes! If you're passionate about African culture, craftsmanship, and entrepreneurship, you can apply to become a Woven Africa Brand Ambassador. Our program offers:\n" +
            "\n" +
            "Exclusive discounts\n" +
            "\n" +
            "Commission-based earnings\n" +
            "\n" +
            "Early access to new collections\n" +
            "\n" +
            "\n" +
            "Visit our Ambassador Program page to apply."
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept multiple secure payment methods, including:\n" +
            "\n" +
            "Credit/Debit Cards (Visa, Mastercard, AMEX, etc.)\n" +
            "\n" +
            "PayPal\n" +
            "\n" +
            "Mobile Money (MTN Momo, Vodafone Cash, AirtelTigo Money – Ghana only)\n" +
            "\n" +
            "Bank Transfers (For bulk orders only)"
    },
    {
        question: "Do you accept returns or exchanges?",
        answer:
            "Because our products are custom-made, we do not accept returns or exchanges unless there is an error on our part (e.g., incorrect customization or defective item). If you receive an incorrect or damaged order, please contact us within 48 hours of delivery with photos of the issue.",
    },
    {
        question: "Do you ship worldwide?",
        answer:
            "Yes! We proudly ship our Kente stoles and custom graduation sashes to customers worldwide, including:\n" +
            "\n" +
            "United States & Canada\n" +
            "\n" +
            "Europe (UK, Germany, France, etc.)\n" +
            "\n" +
            "Africa (Nigeria, South Africa, Kenya, etc.)\n" +
            "\n" +
            "Asia & Australia",
    },
    {
        question: "How can I contact Woven Africa for assistance?",
        answer:
            "For any inquiries, support, or bulk orders, reach us via:\n" +
            "\n" +
            "Phone/WhatsApp: +233 (249961617)\n" +
            "\n" +
            "Email: contact@wovenafrica.com\n" +
            "\n" +
            "Social Media:\n" +
            "\n" +
            "Facebook: @wovenafrica\n" +
            "\n" +
            "Instagram: @wovenafrica\n" +
            "\n" +
            "Twitter/X: @wovenafrica\n" +
            "\n" +
            "\n" +
            "Live Chat: Available on our website during business hours",
    },
    {
        question: "Where can I find Woven Africa’s policies?",
        answer:
            "You can review our policies directly on our website:\n" +
            "\n" +
            "Privacy Policy – How we handle your personal data\n" +
            "\n" +
            "Shipping Policy – Delivery timeframes and fees\n" +
            "\n" +
            "Terms & Conditions – Guidelines for ordering and refunds\n" +
            "\n" +
            "Returns & Refund Policy – Steps for reporting incorrect or damaged items",
    },
    {
        question: "Can Woven Africa produce sashes for other events besides graduations?",
        answer:
            "Yes! While we specialize in graduation stoles, we also create customized sashes for:\n" +
            "\n" +
            "Religious & Church Events\n" +
            "\n" +
            "Cultural Festivals\n" +
            "\n" +
            "Weddings & Special Occasions\n" +
            "\n" +
            "Corporate & Academic Honors Programs\n" +
            "\n" +
            "\n" +
            "If you need a unique design for your event, contact us to discuss customization options!",
    },

];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center text-ashesi-red mb-6">
                Frequently Asked Questions
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center py-4 text-lg font-semibold text-gray-800 focus:outline-none"
                        >
                            {faq.question}
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaChevronDown className="text-gray-500" />
                            </motion.div>
                        </button>
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: openIndex === index ? "auto" : 0,
                                opacity: openIndex === index ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p className="text-gray-600 px-4 pb-4">{faq.answer}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
