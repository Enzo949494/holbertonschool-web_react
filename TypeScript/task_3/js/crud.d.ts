// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Declare module crud with type declarations for each function
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
