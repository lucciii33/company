import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { GoogleAnalyticsTracker } from "../component/googleAnalyticsTracker";
import { Context } from "../store/appContext";

export const Questions = () => {
    const { store, actions } = useContext(Context);
    const [showParagraph, setShowParagraph] = useState(false);
    const [showParagraphOne, setShowParagraphOne] = useState(false);
    const [showParagraphTwo, setShowParagraphTwo] = useState(false);
    const [showParagraphThree, setShowParagraphThree] = useState(false);
    const [showParagraphFour, setShowParagraphFour] = useState(false);


    const boxVarient = {
        hidden: {
            x: "-100vh",
        },
        visible: {
            x: 0,
            duration: 2,
            // transition: {
            // 	delay: 0.3
            // }
        }
    }

    const boxVarient2 = {
        hidden: {
            x: "100vh",
        },
        visible: {
            x: 0,
            duration: 3,
            // transition: {
            // 	delay: 0.3
            // }
        }
    }

    return (
        <div className="">
            <GoogleAnalyticsTracker />
            <div className="d-flex m-4 mt-2 mb-3">
                <motion.div className="questions-box p-5 me-3" transition={{ type: "spring", stiffness: 130 }}
                    variants={boxVarient}
                    animate="visible"
                    initial="hidden"
                    whileHover={{
                        boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
                        scale: 1.1,
                        originX: 0,
                    }}>
                    <a className="link-tag" href='#costAndTimeEstimation'>Cost and time estimations</a>
                    <a className="link-tag" href='#howWeWork'>How we work</a>
                    <a className="link-tag" href='#legalAndSafetyIssues'>Legal and safety issues</a>
                    <a className="link-tag" href='#technicalAspects'>Technical aspects</a>
                    {/* <h4>Technical aspects</h4> */}
                </motion.div>
                <motion.div
                    className="squaer"
                    initial={{ scale: 3 }}
                    animate={{ rotate: 180, scale: 1, x: 800, y: -10 }}
                    transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 20,
                        duration: 1.5
                    }}
                ></motion.div>
                <motion.div
                    className="squaer"
                    initial={{ scale: 1 }}
                    animate={{ rotate: 180, scale: 3, y: 430, x: -10 }}
                    transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 20,
                        duration: 2
                    }}></motion.div>
                <motion.div
                    className="squaer"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 180, scale: 2, x: 900, y: 300 }}
                    transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 20,
                        duration: 50
                    }}></motion.div>
                <div>

                    <motion.div className="answer-box" transition={{ type: "spring", stiffness: 90 }}
                        variants={boxVarient2}
                        animate="visible"
                        initial="hidden">
                        <h4 id="costAndTimeEstimation">Cost and time estimations</h4>
                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraph(!showParagraph)}>How much do your services cost?</h6>
                                {showParagraph &&
                                    <div className="bg-answer">
                                        <div> <p>As much as we hate giving you this answer - it really depends. Each project is different in scope and skills required, and has to be priced individually. If you have a project in mind, don’t hesitate to get in touch with us. We’ll get back to you quickly with personalized estimation.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>

                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphOne(!showParagraphOne)}>What method do you use to appraise your projects?</h6>
                                {showParagraphOne &&
                                    <div className="bg-answer">
                                        <div> <p>Depending on the project, we use either Time & Material or Fixed Price model of pricing our services. The Time & Material model is much more flexible - it makes it easy to make changes or add new elements to the initial scope on the fly. It’s also significantly cheaper, but assumes that you take a more active role in the project.

                                            Fixed Price, on the other hand, means that we take more risks on ourselves, and because of that, we also charge a premium. It’s less flexible, as we follow a precise contract without much room for changes.

                                            For a large majority of our projects, we recommend the Time & Materials model, as it’s easier to work with for both parties, better suited to agile nature of our work, and in the long run cheaper for you.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>

                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphTwo(!showParagraphTwo)} >How soon can you start a project?</h6>
                                {showParagraphTwo &&
                                    <div className="bg-answer">
                                        <div> <p>Although it depends on the current workload, we generally start projects within a week from receiving the complete info needed from you.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>


                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphThree(!showParagraphThree)}>What are the key factors to how long a project takes?</h6>
                                {showParagraphThree &&
                                    <div className="bg-answer">
                                        <div> <p>The amount of work needed to be done and how many team members are engaged on our part is the obvious factor.

                                            However, depending on a project, there might be situations where some time constraints are beyond our control. Setting up a payment system is a good example, as there is no way of speeding up the authentication process of a third party provider.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>

                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphFour(!showParagraphFour)}>How do I make sure that for my money, your team is only working on my project?</h6>
                                {showParagraphFour &&
                                    <div className="bg-answer">
                                        <div> <p>Although our team members get much freedom in how they work, we put strong emphasis on diligent reporting of each activity. This is how we know exactly what each of us is working on, at every time. You can request those reports from us at any time.

                                        </p></div>
                                    </div>}
                            </div>

                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>
                    </motion.div>
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                    <div className="answer-box">
                        <h4 id="howWeWork">How we work</h4>
                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraph(!showParagraph)}>How much do your services cost?</h6>
                                {showParagraph &&
                                    <div className="bg-answer">
                                        <div> <p>As much as we hate giving you this answer - it really depends. Each project is different in scope and skills required, and has to be priced individually. If you have a project in mind, don’t hesitate to get in touch with us. We’ll get back to you quickly with personalized estimation.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>

                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphOne(!showParagraphOne)}>What method do you use to appraise your projects?</h6>
                                {showParagraphOne &&
                                    <div className="bg-answer">
                                        <div> <p>Depending on the project, we use either Time & Material or Fixed Price model of pricing our services. The Time & Material model is much more flexible - it makes it easy to make changes or add new elements to the initial scope on the fly. It’s also significantly cheaper, but assumes that you take a more active role in the project.

                                            Fixed Price, on the other hand, means that we take more risks on ourselves, and because of that, we also charge a premium. It’s less flexible, as we follow a precise contract without much room for changes.

                                            For a large majority of our projects, we recommend the Time & Materials model, as it’s easier to work with for both parties, better suited to agile nature of our work, and in the long run cheaper for you.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>

                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphTwo(!showParagraphTwo)} >How soon can you start a project?</h6>
                                {showParagraphTwo &&
                                    <div className="bg-answer">
                                        <div> <p>Although it depends on the current workload, we generally start projects within a week from receiving the complete info needed from you.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>


                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphThree(!showParagraphThree)}>What are the key factors to how long a project takes?</h6>
                                {showParagraphThree &&
                                    <div className="bg-answer">
                                        <div> <p>The amount of work needed to be done and how many team members are engaged on our part is the obvious factor.

                                            However, depending on a project, there might be situations where some time constraints are beyond our control. Setting up a payment system is a good example, as there is no way of speeding up the authentication process of a third party provider.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>

                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphFour(!showParagraphFour)}>How do I make sure that for my money, your team is only working on my project?</h6>
                                {showParagraphFour &&
                                    <div className="bg-answer">
                                        <div> <p>Although our team members get much freedom in how they work, we put strong emphasis on diligent reporting of each activity. This is how we know exactly what each of us is working on, at every time. You can request those reports from us at any time.

                                        </p></div>
                                    </div>}
                            </div>

                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>

                    </div>

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


                    <div className="answer-box">
                        <h4 id="legalAndSafetyIssues">Legal and safety issues</h4>
                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraph(!showParagraph)}>How much do your services cost?</h6>
                                {showParagraph &&
                                    <div className="bg-answer">
                                        <div> <p>As much as we hate giving you this answer - it really depends. Each project is different in scope and skills required, and has to be priced individually. If you have a project in mind, don’t hesitate to get in touch with us. We’ll get back to you quickly with personalized estimation.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>

                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphOne(!showParagraphOne)}>What method do you use to appraise your projects?</h6>
                                {showParagraphOne &&
                                    <div className="bg-answer">
                                        <div> <p>Depending on the project, we use either Time & Material or Fixed Price model of pricing our services. The Time & Material model is much more flexible - it makes it easy to make changes or add new elements to the initial scope on the fly. It’s also significantly cheaper, but assumes that you take a more active role in the project.

                                            Fixed Price, on the other hand, means that we take more risks on ourselves, and because of that, we also charge a premium. It’s less flexible, as we follow a precise contract without much room for changes.

                                            For a large majority of our projects, we recommend the Time & Materials model, as it’s easier to work with for both parties, better suited to agile nature of our work, and in the long run cheaper for you.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>

                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphTwo(!showParagraphTwo)} >How soon can you start a project?</h6>
                                {showParagraphTwo &&
                                    <div className="bg-answer">
                                        <div> <p>Although it depends on the current workload, we generally start projects within a week from receiving the complete info needed from you.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>


                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphThree(!showParagraphThree)}>What are the key factors to how long a project takes?</h6>
                                {showParagraphThree &&
                                    <div className="bg-answer">
                                        <div> <p>The amount of work needed to be done and how many team members are engaged on our part is the obvious factor.

                                            However, depending on a project, there might be situations where some time constraints are beyond our control. Setting up a payment system is a good example, as there is no way of speeding up the authentication process of a third party provider.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>

                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphFour(!showParagraphFour)}>How do I make sure that for my money, your team is only working on my project?</h6>
                                {showParagraphFour &&
                                    <div className="bg-answer">
                                        <div> <p>Although our team members get much freedom in how they work, we put strong emphasis on diligent reporting of each activity. This is how we know exactly what each of us is working on, at every time. You can request those reports from us at any time.

                                        </p></div>
                                    </div>}
                            </div>

                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>
                    </div>


                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                    <div className="answer-box">
                        <h4 id="technicalAspects">Technical aspects</h4>
                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraph(!showParagraph)}>How much do your services cost?</h6>
                                {showParagraph &&
                                    <div className="bg-answer">
                                        <div> <p>As much as we hate giving you this answer - it really depends. Each project is different in scope and skills required, and has to be priced individually. If you have a project in mind, don’t hesitate to get in touch with us. We’ll get back to you quickly with personalized estimation.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>

                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphOne(!showParagraphOne)}>What method do you use to appraise your projects?</h6>
                                {showParagraphOne &&
                                    <div className="bg-answer">
                                        <div> <p>Depending on the project, we use either Time & Material or Fixed Price model of pricing our services. The Time & Material model is much more flexible - it makes it easy to make changes or add new elements to the initial scope on the fly. It’s also significantly cheaper, but assumes that you take a more active role in the project.

                                            Fixed Price, on the other hand, means that we take more risks on ourselves, and because of that, we also charge a premium. It’s less flexible, as we follow a precise contract without much room for changes.

                                            For a large majority of our projects, we recommend the Time & Materials model, as it’s easier to work with for both parties, better suited to agile nature of our work, and in the long run cheaper for you.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>

                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphTwo(!showParagraphTwo)} >How soon can you start a project?</h6>
                                {showParagraphTwo &&
                                    <div className="bg-answer">
                                        <div> <p>Although it depends on the current workload, we generally start projects within a week from receiving the complete info needed from you.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>


                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphThree(!showParagraphThree)}>What are the key factors to how long a project takes?</h6>
                                {showParagraphThree &&
                                    <div className="bg-answer">
                                        <div> <p>The amount of work needed to be done and how many team members are engaged on our part is the obvious factor.

                                            However, depending on a project, there might be situations where some time constraints are beyond our control. Setting up a payment system is a good example, as there is no way of speeding up the authentication process of a third party provider.</p></div>
                                    </div>}
                            </div>
                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>

                        <div className="question-border">
                            <div>
                                <h6 onClick={() => setShowParagraphFour(!showParagraphFour)}>How do I make sure that for my money, your team is only working on my project?</h6>
                                {showParagraphFour &&
                                    <div className="bg-answer">
                                        <div> <p>Although our team members get much freedom in how they work, we put strong emphasis on diligent reporting of each activity. This is how we know exactly what each of us is working on, at every time. You can request those reports from us at any time.

                                        </p></div>
                                    </div>}
                            </div>

                            <div className="ms-5"><i className="fas fa-plus"></i></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};