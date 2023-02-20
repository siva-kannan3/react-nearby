import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";

import { Header } from ".";
import { store } from "../../../../store";

describe("Header test suite", () => {
    const WrappedHeader = (
        <Provider store={store}>
            <Header />
        </Provider>
    );

    it("render header without throwing errors", () => {
        shallow(WrappedHeader);
    });

    it("render header logo", () => {
        const wrapper = mount(WrappedHeader);
        const LogoEle = wrapper.find(`[data-testid="logo"]`);
        expect(LogoEle.exists()).toBeTruthy();
    });
});
