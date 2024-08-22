import React, { useState } from 'react';
import { supabase } from '../../supabase'; // Import Supabase configuration
import './ReviewFormModal.css';

const ReviewFormModal = ({ show, onClose, onReviewAdded }) => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReview = { name, review, rating };
        onReviewAdded(newReview);
        onClose();
    };

    if (!show) return null;

    return (
        <div className="modal-overlay" style={{ display: show ? 'flex' : 'none' }}>
            <div className="modal-container">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Your Review</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Review</label>
                                <textarea
                                    className="form-control"
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Rating</label>
                                <select
                                    className="form-select"
                                    value={rating}
                                    onChange={(e) => setRating(Number(e.target.value))}
                                    required
                                >
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewFormModal;
