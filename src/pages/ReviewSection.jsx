import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase.js'; // Import your Supabase configuration
import ReviewFormModal from '../components/ReviewModal/ReviewFormModal';
import placeholderImage from '../img/user.png';

const ReviewsSection = () => {
    const [reviews, setReviews] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 3;

    useEffect(() => {
        const fetchReviews = async () => {
            const { data, error } = await supabase.from('reviews').select('*');
            if (error) {
                console.error('Error fetching reviews:', error);
            } else {
                setReviews(data);
            }
        };
        fetchReviews();
    }, []);

    const handleReviewAdded = async (newReview) => {
        const { data, error } = await supabase.from('reviews').insert([newReview]);
        if (error) {
            console.error('Error adding review:', error);
        } else {
            setReviews([...reviews, ...data]);
        }
    };

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(reviews.length / reviewsPerPage)));
    };

    const startIndex = (currentPage - 1) * reviewsPerPage;
    const displayedReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className='d-flex justify-content-between align-items-center'>
                    <h2 className='text-bold'>Customer Reviews</h2>
                    <button className='btn btn-primary text-dark' onClick={() => setShowModal(true)}>Add Yours</button>
                </div>
                <div className="row g-5 align-items-center">
                    {displayedReviews.length > 0 ? (
                        displayedReviews.map((review, index) => (
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                                <div className="card d-flex flex-column align-items-center p-2" style={{ borderRadius: "10px" }}>
                                    <img src={placeholderImage} style={{ width: "30%", objectFit: "cover" }} alt="User" />
                                    <div className="card-body">
                                        <h5 className="card-title text-uppercase">{review.name}</h5>
                                        <p className="card-text">{review.review}</p>
                                        <p className="card-text">Rating: {review.rating} / 5</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet. Be the first to add one!</p>
                    )}
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-secondary" onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <button className="btn btn-secondary" onClick={handleNextPage} disabled={currentPage === Math.ceil(reviews.length / reviewsPerPage)}>
                        Next
                    </button>
                </div>
            </div>
            <ReviewFormModal show={showModal} onClose={() => setShowModal(false)} onReviewAdded={handleReviewAdded} />
        </div>
    );
};

export default ReviewsSection;
