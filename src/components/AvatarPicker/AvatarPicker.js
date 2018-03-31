import React, { Component } from "react";
import { Animated } from "react-animated-css";
import onClickOutside from "react-onclickoutside";
import AvatarList from "../AvatarList/AvatarList";
import Popover from "../Popover/Popover";
import Avatar from "../Avatar/Avatar";
import "./AvatarPicker.css";

class AvatarPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAvatar: props.avatars[0],
      isPopoverOpen: false,
      isLoading: false,
      loadingAvatar: null
    };
    this.togglePopover = this.togglePopover.bind(this);
    this.onAvatarSelect = this.onAvatarSelect.bind(this);
    this.closePopover = this.closePopover.bind(this);
    this.openPopover = this.openPopover.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(e) {
    this.closePopover();
  }

  togglePopover() {
    if (!this.state.isPopoverOpen) {
      this.openPopover();
    } else {
      this.closePopover();
    }
  }

  openPopover() {
    this.setState({
      isPopoverOpen: true
    });
  }

  closePopover() {
    this.setState({
      isPopoverOpen: false
    });
  }

  onAvatarSelect(selectedAvatar) {
    if (selectedAvatar === this.state.selectedAvatar) {
      return;
    }
    this.setState({
      isLoading: true,
      loadingAvatar: selectedAvatar
    });
    setTimeout(() => {
      this.setState({
        isPopoverOpen: false,
        selectedAvatar,
        isLoading: false,
        loadingAvatar: null
      });
    }, 1000);
  }

  render() {
    return (
      <div className="avatar-picker">
        <div className="header text-center">
          <Avatar
            onClick={this.togglePopover}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                this.togglePopover();
              }
            }}
            className={`selected-avatar ${
              this.state.isPopoverOpen ? "active" : ""
            }`}
            avatar={this.state.selectedAvatar}
          />
        </div>
        <Animated
          animationIn="bounceIn"
          animationOut="zoomOut"
          isVisible={this.state.isPopoverOpen}
          animateOnMount={false}
        >
          <Popover>
            <AvatarList
              avatars={this.props.avatars}
              onAvatarSelect={this.onAvatarSelect}
              selectedAvatar={this.state.selectedAvatar}
              isLoading={this.state.isLoading}
              loadingAvatar={this.state.loadingAvatar}
            />
          </Popover>
        </Animated>
      </div>
    );
  }
}

export default onClickOutside(AvatarPicker);
