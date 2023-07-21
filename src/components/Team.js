import React from 'react'
import Teammember from './Teammember'

const Team = () => {
    return <div class="team-members">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <h2>Our Team Members</h2>
                    </div>
                </div>

                <Teammember
                    image="assets/images/team_01.jpg"
                    name="Johnny William"
                    designation="CO-Founder"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
                />

                <Teammember
                    image="assets/images/team_02.jpg"
                    name="Karry Pitcher"
                    designation="Karry Pitcher"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
                />

                <Teammember
                    image="assets/images/team_03.jpg"
                    name="Michael Soft"
                    designation="Chief Marketing"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
                />

                <Teammember
                    image="assets/images/team_04.jpg"
                    name="Mary Cool"
                    designation="Product Specialist"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
                />

                <Teammember
                    image="assets/images/team_05.jpg"
                    name="George Walker"
                    designation="Product Photographer"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
                />

                <Teammember
                    image="assets/images/team_06.jpg"
                    name="Kate Town"
                    designation="General Manager"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
                />
            </div>
        </div>
    </div>
}

export default Team