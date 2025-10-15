import React, { useState, useEffect } from 'react';
import './CreateCVPage.css';
import { motion } from 'framer-motion';

const CreateCVPage = () => {
    useEffect(() => {
        document.title = 'Create Your Professional CV - ConfidenSee';
    }, []);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [isGenerating, setIsGenerating] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        jobTitle: '',
        email: '',
        phone: '',
        location: '',
        linkedinProfile: '',
        website: '',
        profilePhoto: null,
        professionalSummary: '',
        experiences: [{
            jobTitle: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            currentlyWorking: false,
            description: ''
        }],
        education: [{
            degree: '',
            institution: '',
            location: '',
            graduationYear: ''
        }],
        skills: ''
    });

    const templates = [
        {
            id: 'modern',
            name: 'Modern Professional',
            description: 'Clean and professional design with a modern layout',
            icon: '📄'
        },
        {
            id: 'executive',
            name: 'Executive',
            description: 'Bold and authoritative design for leadership positions',
            icon: '💼'
        },
        {
            id: 'creative',
            name: 'Creative',
            description: 'Modern two-column layout perfect for creative professionals',
            icon: '🎨'
        }
    ];

    const handleInputChange = (e, field) => {
        setFormData({
            ...formData,
            [field]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                profilePhoto: file
            });
        }
    };

    const addExperience = () => {
        setFormData({
            ...formData,
            experiences: [...formData.experiences, {
                jobTitle: '',
                company: '',
                location: '',
                startDate: '',
                endDate: '',
                currentlyWorking: false,
                description: ''
            }]
        });
    };

    const addEducation = () => {
        setFormData({
            ...formData,
            education: [...formData.education, {
                degree: '',
                institution: '',
                location: '',
                graduationYear: ''
            }]
        });
    };

    const removeExperience = (index) => {
        const newExperiences = formData.experiences.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            experiences: newExperiences
        });
    };

    const removeEducation = (index) => {
        const newEducation = formData.education.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            education: newEducation
        });
    };

    const handleGenerateCV = () => {
        // Handle CV generation logic here
        console.log('Generating CV with data:', formData);
    };

    return (
        <div className="bg-gray-100 p-8 min-h-screen">
            <div className="bg-white shadow-lg mx-auto p-6 rounded-lg max-w-5xl">
                <h1 className="bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 font-bold text-transparent text-3xl text-center">
                    Create Your Professional CV
                </h1>
                <p className="mb-8 text-gray-600 text-center">
                    Choose a template, fill in your information, and download your CV as PDF.
                </p>

                {/* Template Selection */}
                <div className="mb-8">
                    <h2 className="mb-4 font-semibold text-2xl">Choose a Template</h2>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
                        {templates.map((template) => (
                            <div
                                key={template.id}
                                className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedTemplate === template.id
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 hover:border-blue-300'
                                    }`}
                                onClick={() => setSelectedTemplate(template.id)}
                            >
                                <div className="mb-2 text-4xl">{template.icon}</div>
                                <h3 className="font-semibold">{template.name}</h3>
                                <p className="text-gray-600 text-sm">{template.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Personal Information */}
                <div className="mb-8">
                    <h2 className="mb-4 font-semibold text-2xl">Your Information</h2>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <label className="block font-medium text-gray-700 text-sm">Full Name *</label>
                            <input
                                type="text"
                                className="block shadow-sm mt-1 border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange(e, 'fullName')}
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 text-sm">Job Title *</label>
                            <input
                                type="text"
                                className="block shadow-sm mt-1 border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                                value={formData.jobTitle}
                                onChange={(e) => handleInputChange(e, 'jobTitle')}
                                placeholder="Software Engineer"
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 text-sm">Email *</label>
                            <input
                                type="email"
                                className="block shadow-sm mt-1 border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                                value={formData.email}
                                onChange={(e) => handleInputChange(e, 'email')}
                                placeholder="john.doe@example.com"
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 text-sm">Phone</label>
                            <input
                                type="tel"
                                className="block shadow-sm mt-1 border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                                value={formData.phone}
                                onChange={(e) => handleInputChange(e, 'phone')}
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>
                    </div>
                </div>

                {/* Work Experience */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-semibold text-2xl">Work Experience</h2>
                        <button
                            onClick={addExperience}
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition-colors"
                        >
                            + Add Experience
                        </button>
                    </div>
                    {formData.experiences.map((exp, index) => (
                        <div key={index} className="mb-4 p-4 border rounded-lg">
                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-4">
                                <div>
                                    <label className="block font-medium text-gray-700 text-sm">Job Title</label>
                                    <input
                                        type="text"
                                        className="block shadow-sm mt-1 border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                                        value={exp.jobTitle}
                                        onChange={(e) => {
                                            const newExperiences = [...formData.experiences];
                                            newExperiences[index].jobTitle = e.target.value;
                                            setFormData({ ...formData, experiences: newExperiences });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium text-gray-700 text-sm">Company</label>
                                    <input
                                        type="text"
                                        className="block shadow-sm mt-1 border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                                        value={exp.company}
                                        onChange={(e) => {
                                            const newExperiences = [...formData.experiences];
                                            newExperiences[index].company = e.target.value;
                                            setFormData({ ...formData, experiences: newExperiences });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => removeExperience(index)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-semibold text-2xl">Education</h2>
                        <button
                            onClick={addEducation}
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition-colors"
                        >
                            + Add Education
                        </button>
                    </div>
                    {formData.education.map((edu, index) => (
                        <div key={index} className="mb-4 p-4 border rounded-lg">
                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-4">
                                <div>
                                    <label className="block font-medium text-gray-700 text-sm">Degree</label>
                                    <input
                                        type="text"
                                        className="block shadow-sm mt-1 border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                                        value={edu.degree}
                                        onChange={(e) => {
                                            const newEducation = [...formData.education];
                                            newEducation[index].degree = e.target.value;
                                            setFormData({ ...formData, education: newEducation });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium text-gray-700 text-sm">Institution</label>
                                    <input
                                        type="text"
                                        className="block shadow-sm mt-1 border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                                        value={edu.institution}
                                        onChange={(e) => {
                                            const newEducation = [...formData.education];
                                            newEducation[index].institution = e.target.value;
                                            setFormData({ ...formData, education: newEducation });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => removeEducation(index)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skills */}
                <div className="mb-8">
                    <h2 className="mb-4 font-semibold text-2xl">Skills</h2>
                    <textarea
                        className="block shadow-sm mt-1 border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                        rows="3"
                        value={formData.skills}
                        onChange={(e) => handleInputChange(e, 'skills')}
                        placeholder="JavaScript, Python, React, etc."
                    />
                </div>

                {/* Generate CV Button */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={handleGenerateCV}
                        className="bg-gradient-to-r from-blue-600 hover:from-blue-700 to-purple-600 hover:to-purple-700 px-6 py-3 rounded-md text-white transition-colors"
                    >
                        Generate CV
                    </button>
                    <button
                        onClick={handleGenerateCV}
                        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-white transition-colors"
                    >
                        Download as PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateCVPage;