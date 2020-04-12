import React, { Component } from 'react';
import UserBlock from '../../user/userblock';
import ActivityInterface from '../../../../interfaces/ActivityInterface';

interface Props {
  activity: ActivityInterface
}

class TextPost extends Component<Props> {
  render() {
    const { caption, user, comments, likes } = this.props.activity;
    return (
      <div className="post">
        <UserBlock user={user} time="7:30 PM today" />
        <p>{caption}</p>

        <p>
          <a href="/" onClick={event => event.preventDefault()} className="link-black text-sm"><i className="far fa-thumbs-up mr-1"></i> Like ({likes})</a>
          <span className="float-right">
            <a href="/" onClick={event => event.preventDefault()} className="link-black text-sm">
              <i className="far fa-comments mr-1"></i> Comments ({comments}})
                          </a>
          </span>
        </p>

        <input className="form-control form-control-sm" type="text" placeholder="Type a comment" />
      </div>
    );
  }
}

export default TextPost;
