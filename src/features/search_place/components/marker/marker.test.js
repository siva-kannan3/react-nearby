import { shallow } from "enzyme";

import { Marker } from ".";

describe("Marker widget test suite", () => {
    it("render fallback component without throwing errors", () => {
        shallow(<Marker name={"Government hospital"} />);
    });

    it("render place title", () => {
        const locationName = "PVR cinemas";
        const wrapper = shallow(<Marker name={locationName} />);
        const markerPin = wrapper.find(`[data-testid='marker_pin']`);
        expect(markerPin.props().title).toEqual(locationName);
    });
});
