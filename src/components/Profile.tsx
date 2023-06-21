import React from 'react';

const ProfileCard: React.FC = () => {
  return (
    <div className="card_profile m-auto my-14">
  <div className="content_profile">
    <div className="back_profile">
      <div className="back-content_profile">
        SVG
        <strong>Hover Me</strong>
      </div>
    </div>
    <div className="front_profile">
      
      <div className="img_profile">
        <div className="circle_profile">
        </div>
        <div className="circle_profile" id="right_profile">
        </div>
        <div className="circle_profile" id="bottom_profile">
        </div>
      </div>

      <div className="front-content_profile">
        <small className="badge_profile">Pasta</small>
        <div className="description_profile">
          <div className="title_profile">
            <p className="title_profile">
              <strong>Spaguetti Bolognese</strong>
            </p>
            SVG
          </div>
          <p className="card_profile-footer">
            30 Mins &nbsp; | &nbsp; 1 Serving
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ProfileCard;
