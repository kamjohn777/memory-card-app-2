import { useState } from "react";
import '../styles/gameRules.css';
// import assets from './assets/images';
// import images from '../assets/images';

export default function GameRules() {
    const [gameRules, setGameRules] = useState({
        rules: '',
      });
    
      const handleChange = (event) => {
        const { value } = event.target;
        setGameRules({
          ...gameRules,
          [rules]: value,
        });
      };




    //   Test
    const [btnClick, setBtnClick] = useState(false);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Form Data:', formData);
    //     setFormData({
    //       name: '',
    //     });
    // }

    const handleClickRules = (event) => {
        if(btnClick) {
            setBtnClick(false);
        } else {
            setBtnClick(true);
        }
    }
    
    return (
        <>
        {/* <button id={btnClick ? 'how-to-play-btn' : 'ruleBtn'} onClick={handleClickRules} value={handleChange}> */}
            <button id={btnClick ? 'ruleBtn' : 'how-to-play-btn'} onClick={handleClickRules}>
             {/* <button id="how-to-play-btn" onClick={handleClickRules}>    */}
            {/* className={chevy ?  'experience-info' : 'hidden2'}> */}
                {/* <img src="../assets/images/question-mark.png" alt="question-mark" /> */}
                Click for rules
            </button>

            {btnClick ? 
             <div className="info-div">
                <div className="instructions">
                    <div>
                        <p>Don't click on the same card twice!</p>
                    </div>
                    <div>
                        <p>Click on NARUTO SHIPPUDEN logo to go back.</p>
                    </div>
                </div>
                {/* <img src="../assets/images/sakura-teaching-how-to-play.png" alt="" /> */}
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dcwip5l-e6a3996b-3a43-4ff6-8521-c47350c4485a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGN3aXA1bC1lNmEzOTk2Yi0zYTQzLTRmZjYtODUyMS1jNDczNTBjNDQ4NWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fJ8wPIuwv6OPflbtm-lCkahEAOOMiSzsSR6qpd1x1mM" alt="" />
             </div>
            : <div className="hidden-rules"><h3>hey dude</h3></div>}
        </>
    )
}