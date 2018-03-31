import React from "react";
import { mount } from "enzyme";
import AvatarPicker from "../components/AvatarPicker/AvatarPicker";
import { AVATARS } from "../data/AVATARS";

describe("AvatarPicker", () => {
  let props;
  let mountedAvatarPicker;
  const avatarPicker = () => {
    if (!mountedAvatarPicker) {
      mountedAvatarPicker = mount(<AvatarPicker {...props} />);
    }
    return mountedAvatarPicker;
  };

  beforeEach(() => {
    props = {
      avatars: AVATARS
    };
    mountedAvatarPicker = undefined;
  });

  it("renders all avatars", () => {
    const avatars = avatarPicker().find("img");
    expect(avatars.length).toBeGreaterThan(AVATARS.length);
  });

  it("has one selectedAvatar", () => {
    const avatars = avatarPicker().find("Avatar.selected-avatar");
    expect(avatars.length).toBe(1);
  });
});
