import { combineReducers } from "redux";
import AppImages from 'Images'

let allData = (iniState = [{
    category: 'Chairs',
    items: [{ name: 'Dining Chair', price: 1000, url: AppImages.Chair1 },
    { name: 'Elegant Chair', price: 1300, url: AppImages.Chair2 },
    { name: 'Wing Chair', price: 900, url: AppImages.Chair3 },
    { name: 'Deck Chair', price: 1900, url: AppImages.Chair4 },
    { name: 'Desk Chair', price: 2100, url: AppImages.Chair5 },
    { name: 'Armchair', price: 1500, url: AppImages.Chair6 },
    { name: 'Student Chair', price: 500, url: AppImages.Chair7 },
    { name: 'Director’s Chair', price: 4700, url: AppImages.Chair8 }
    ]
},
{
    category: 'Tables',
    items: [{ name: 'Marbel Table', price: 40000, url: AppImages.Table1 },
    { name: 'Coffee Table', price: 4200, url: AppImages.Table2 },
    { name: 'Accent Table', price: 2500, url: AppImages.Table3 },
    { name: 'Console Table', price: 19200, url: AppImages.Table4 },
    { name: 'Side Table', price: 38000, url: AppImages.Table5 },
    { name: 'Drink Table', price: 33500, url: AppImages.Table6 },
    { name: 'Studying Table', price: 12000, url: AppImages.Table7 },
    { name: 'Bunching Table', price: 32700, url: AppImages.Table8 }
    ]
},
{
    category: 'Lamps',
    items: [{ name: 'Modern Lamp', price: 1000, url: AppImages.Lamp1 },
    { name: 'Russel Lamp', price: 2300, url: AppImages.Lamp2 },
    { name: 'Accent Lamp', price: 2500, url: AppImages.Lamp3 },
    { name: 'Dolphin Lamp', price: 1700, url: AppImages.Lamp4 },
    { name: 'Castle Lamp', price: 3100, url: AppImages.Lamp5 },
    { name: 'CSA Lamp', price: 1700, url: AppImages.Lamp6 },
    { name: 'Latin Lamp', price: 4000, url: AppImages.Lamp7 },
    { name: 'Table Lamp', price: 1200, url: AppImages.Lamp8 }
    ]
},
]
, action) => {
    switch (action.type) {
        case "ALLDATA": {
            return action.payload;
        }
        default: {
            return iniState;
        }
    }
};

let cartData = (iniState = [], action) => {
    switch (action.type) {
        case "CART": {
            return action.payload;
        }
        default: {
            return iniState;
        }
    }
}
let allCategories = (iniState = ['All', 'Chairs', 'Tables', 'Lamps']) => {
    return iniState
}
let selectedCategory = (iniState = 'All', action) => {
    switch (action.type) {
        case "SELECTEDCAT": {
            return action.payload;
        }
        default: {
            return iniState;
        }
    }
}

let allReducers = combineReducers({
    allData, allCategories, selectedCategory,cartData
});
export default allReducers