import React, { useState } from "react";
import useFetch from "../../customHooks/useFetch";


// import "./App.css";

function Faq() {
  
 const{data: Faq, laoding, error} =useFetch('getFaq');
 console.log(Faq, "JAWWAD")


  const [currentItem, setcurrentItem] = useState(0);

  

  const faq = [
    {
      title: "HR Management",
      questions: [
        { question: "How to Make someone a Super User", answer: "url" },
        { question: "How to Create a ROTA", answer: "url" },
        { question: "How to Create a Shift", answer: "url" },
        { question: "How to Add a New Staff", answer: "url" },
        {
          question: "Locate & Cross Check Staff Assigned task",
          answer: "url",
        },
        { question: "How to view Staff CPD Training Report", answer: "url" },
      ],
    },
    {
      title: "Compliance",
      questions: [
        { question: "How to sign policies", answer: "url" },
        { question: "How To download our app on an iPhone", answer: "url" },
        { question: "How To download our app on an android", answer: "url" },
        {
          question: "How to Download And Customise Documents",
          answer: "answer",
        },
        { question: "How To Change Your Password and PIN", answer: "answer" },
        {
          question: "How To Change Password and PIN for Staff",
          answer: "url",
        },
        { question: "How To Add An Employee", answer: "url" },
        { question: "How to delegate a task to an employee", answer: "url" },
        { question: "How to delegate a task to an employee", answer: "url" },
        {
          question: "How to run a report on you staff members",
          answer: "url",
        },
        { question: "How to make a shift on the rota", answer: "url" },
        { question: "How to edit a set rota", answer: "url" },
        { question: "How to upload a document", answer: "url" },
        {
          question: "How to start using Smart Dental Compliance",
          answer: "url",
        },
        { question: "How to Create a Custom Log", answer: "url" },
        {
          question: "How to remove activities from Non Working days",
          answer: "url",
        },
      ],
    },
  ];

  return (
    <div className="row">
      <div className="col1">
        {faq.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <button
                onClick={(e) => {
                  setcurrentItem(key);
                }}
                disabled={key === currentItem}
              >
                {item.title}
              </button>
            </React.Fragment>
          );
        })}
      </div>
      <div className="col2">
        <ul className="list list-block">
          {faq[currentItem].questions.map((data, index) => {
            let { question, answer } = data;
            return (
              <React.Fragment key={index}>
                <li className="list__item">
                  <a title="View">
                    {/* <FontAwesomeIcon
                      className="FontAwesomeIcon"
                      icon={faCirclePlay}
                      answer={answer}
                    /> */}
                  </a>
                </li>
                <li className="list__item list__item_">{question}</li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Faq;
