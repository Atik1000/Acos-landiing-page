import React from 'react';
import '../style/landingpage/faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Man1 from '../icon/man-1.png';
import Man2 from '../icon/man-2.png';

const FAQ = () => {
  const faqData = [
    {
      question: 'Will it work for me?',
      answer:
        'Yes! Irrespective of your level of expertise in Amazon PPC and Bulk Files, our step-by-step process and predefined bid optimization rules are specifically designed to support and guide you effortlessly.',
    },
    {
      question: 'How does ACoS.app help me save time',
      answer:
        'ACoS.app saves you time by using Bulk Files, eliminating the need for manual adjustments, where costly errors can occur.',
    },
    {
      question: 'How does ACoS.app help me save money',
      answer:
        'By identifying underperforming keywords and targets within your PPC campaigns and subsequently lowering their bids, ACoS.app helps to reduce wasted ad spend and ensure your budget is allocated more efficiently.',
    },
    {
      question: 'How are unprofitable keywords and targets idenfied',
      answer:
        "ACoS.app analyzes your PPC campaign data to evaluate the performance of keywords and targets by comparing recent results (File 1 - Yesterday's Data) with historical data(File 2 - 60 Days Data).This comparative approach enables ACoS.app to effectively identify those underperforming keywords and targets and adjust their bids accordingly, resulting in a reduction of wasted ad spend",
    },
    {
      question: 'Is it suitable for small and large-scale PPC accounts',
      answer:
        'ACoS.app is designed to handle PPC accounts with campaigns and Bulk Files of all sizes',
    },
    {
      question: 'How does ACoS.app help me save money',
      answer:
        'By identifying underperforming keywords and targets within your PPC campaigns and subsequently lowering their bids, ACoS.app helps to reduce wasted ad spend and ensure your budget is allocated more efficiently.',
    },
    {
      question: 'How are unprofitable keywords and targets idenfied',
      answer:
        "ACoS.app analyzes your PPC campaign data to evaluate the performance of keywords and targets by comparing recent results (File 1 - Yesterday's Data) with historical data(File 2 - 60 Days Data).This comparative approach enables ACoS.app to effectively identify those underperforming keywords and targets and adjust their bids accordingly, resulting in a reduction of wasted ad spend",
    },
    {
      question: 'Is it suitable for small and large-scale PPC accounts',
      answer:
        'ACoS.app is designed to handle PPC accounts with campaigns and Bulk Files of all sizes',
    },
  ];

  return (
    <div className='container'>
      <h3 className='text-center mb-4'>
        <b>Frequently Asked Questions</b>
      </h3>
      <div className='row'>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            width: '100%',
            gap: 15,
          }}
        >
          {faqData.map((item, index) => (
            <div className='card' key={index}>
              <div className='card-header' id={`heading${index}`}>
                <h5 className='mb-0'>
                  <p
                    className='btn'
                    data-toggle='collapse'
                    data-target={`#collapse${index}`}
                    aria-expanded='true'
                    aria-controls={`collapse${index}`}
                  >
                    {item.question}
                    <FontAwesomeIcon icon={faPlus} />
                  </p>
          
                </h5>
              </div>
              <div
                id={`collapse${index}`}
                className={`collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
                data-parent='#accordion'
              >
                <div className='card-body'>{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <h3 className='text-center mb-4 mt-4 pt-4'>
        <b>Hear what others have to say</b>
      

      </h3>
  
      <div class='container'>
        <div class='row mb-4 pb-4'>
          <div class='col'>
            <div className='box'>
              <h6>
  
                <b>A simple, but brilliant tool</b>
              </h6>
              <p>
                I've been using ACoS.app for a few months now, and it has
                transformed my advertising game. It has helped me eliminate
                wasted ad spend, ultimately lowering my ACOS and increasing my
                overall profitability. It's a simple, but brilliant tool.
              </p>
              <img src={Man1} alt="man" className='man' />
              <span><b>Anthony Nelson</b>
                
              </span>
              <br />
              <span>   Veridian Group </span>
            </div>
          </div>
          <div class='col'>
            <div className='box'>
              <h6>
                <b>A must-have for any Amazon seller</b>
              </h6>
              <p>
                I've tried various tools to optimize my Amazon ads, but this web
                app takes the cake. It helped me cut down on unnecessary
                spending, and my ACOS has dropped significantly. It's a
                must-have for any Amazon seller.
              </p>
              <img src={Man2} alt="man" className='man' />
              <span><b>Ethan Roberts</b>
                <br />
                Astralite Corp
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
