import React from 'react'
import Teammember from './Teammember'

const Team = ({ team_members }) => {
    return <div className="team-members">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-heading">
                        <h2>Our Team Members</h2>
                    </div>
                </div>

                {
                    team_members.length && team_members.map((team, index) =>
                        <Teammember
                            key={index}
                            image={team.image}
                            name={team.name}
                            designation={team.designation}
                            desc={team.desc}
                        />
                    )
                }
            </div>
        </div>
    </div>
}

export default Team