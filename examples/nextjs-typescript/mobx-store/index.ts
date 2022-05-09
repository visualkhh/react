import count from "./Count";
import eventCount from "./EventCount";
import React from "react";
import {MobXProviderContext} from "mobx-react";

export default {
    count,
    eventCount
};
export const useMobxStores = () => React.useContext(MobXProviderContext);
