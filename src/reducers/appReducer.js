import produce from 'immer';
import {
  SELECT_ACCURACY, SELECT_CITY, SELECT_DATA_TYPE, SELECT_DAYS,
  SELECT_DAYS_SEMUSE,
  SELECT_POSTCODE, SELECT_PROXIMITY,
  SELECT_YEAR, UPDATE_COLLECTION,
  UPDATE_RULE, UPDATE_RULES_FOR_SUBMIT, DELETE_RULE
} from '../constants/types';

export const initialState = {
  trolley: {
    cityNames: [],
    postCodes: [],
    collection: {},
    rule: {},
    dataType: {},
    dateTime: {
      fromYear: 2010,
      toYear: 2020,
      weekDay: {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
      },
      semanticDays: [],
    },
    requirements: {
      proximity: {
        sameSensor: false,
        hasRadius: false,
        radius: null,
      },
      accuracy: {
        minAccuracy: false,
        accuracy: null,
      },
    },
  },
  rawRules: [],
};

const handlers = {
  [SELECT_CITY]: (draft, { payload }) => {
    draft.trolley.cityNames = [...draft.trolley.cityNames, payload.cityName];
  },

  [SELECT_POSTCODE]: (draft, { payload }) => {
    const postCodes = draft.trolley.postCodes;
    const isListed = postCodes.find(
      (item) => item.Postcode === payload.Postcode,
    );

    draft.trolley.postCodes = isListed
      ? postCodes.filter((item) => item.Postcode !== payload.Postcode)
      : [...postCodes, payload];
  },

  [SELECT_DATA_TYPE]: (draft, { payload }) => {
    const dataType = draft.trolley.dataType;
    const isListed = payload.name in dataType;
    if (isListed) {
      delete dataType[payload.name];
    } else {
      dataType[payload.name] = payload.data;
    }
  },

  [SELECT_YEAR]: (draft, { payload }) => {
    let fromYear = payload.value[0];
    let toYear = payload.value[1];
    draft.trolley.dateTime = {
      ...draft.trolley.dateTime,
      fromYear,
      toYear,
    };
  },

  [SELECT_DAYS]: (draft, { payload }) => {
    draft.trolley.dateTime.weekDay = {
      ...draft.trolley.dateTime.weekDay,
      ...payload,
    };
  },

  [SELECT_DAYS_SEMUSE]: (draft, { payload }) => {
    const rule = payload.rule;
    const arr = draft.trolley.dateTime.semanticDays;
    if (arr.includes(rule)) {
      draft.trolley.dateTime.semanticDays = arr.filter(item => item !== rule);
    } else {
      arr.push(rule);
    }
  },

  [SELECT_PROXIMITY]: (draft, { payload }) => {
    draft.trolley.requirements.proximity = {
      ...draft.trolley.requirements.proximity,
      ...payload.check,
      radius: payload.value,
    };
  },

  [SELECT_ACCURACY]: (draft, { payload }) => {
    draft.trolley.requirements.accuracy = {
      ...draft.trolley.requirements.accuracy,
      ...payload.check,
      accuracy: payload.value,
    };
  },

  [UPDATE_COLLECTION]: (draft, { payload }) => {
    draft.trolley.collection = {
      ...draft.trolley.collection,
      ...payload,
    };
  },

  [UPDATE_RULE]: (draft, { payload }) => {
    draft.trolley.rule = {
      ...draft.trolley.rule,
      ...payload,
    };
  },

  [UPDATE_RULES_FOR_SUBMIT]: (draft, { payload }) => {
    draft.rawRules[payload.index] = payload.data;
  },

  [DELETE_RULE]: (draft, { payload }) => {
    delete draft.trolley.rule[payload.name];
  },
};

export const reducer = produce((draft, action) =>
  handlers[action.type](draft, action),
);
