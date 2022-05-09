import count from "./Count";
import eventCount, {EventCount} from "./EventCount";
import React from "react";
import {MobXProviderContext} from "mobx-react";
import {Count} from "./Count";

const stores = {
    count,
    eventCount
};
export default stores;

export const useMobxStores = (): typeof stores => React.useContext(MobXProviderContext) as any;
