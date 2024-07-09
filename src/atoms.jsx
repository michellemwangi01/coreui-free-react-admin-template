import { atom } from 'jotai';

export const isLoggedInAtom = atom(false);
export const customErrorAtom = atom('');
export const loggedInUserAtom = atom({})