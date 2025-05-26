/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// Example usage of Teacher interface
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
// Another example with more properties
var teacher4 = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: 'New York',
    contract: true,
    rating: 4.7,
    department: 'Computer Science',
};
console.log(teacher4);
// Example usage of Directors interface
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWFBLHFDQUFxQztBQUNyQyxJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsTUFBTTtJQUNqQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFdEIsdUNBQXVDO0FBQ3ZDLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixRQUFRLEVBQUUsVUFBVTtJQUNwQixRQUFRLEVBQUUsSUFBSTtJQUNkLE1BQU0sRUFBRSxHQUFHO0lBQ1gsVUFBVSxFQUFFLGtCQUFrQjtDQUMvQixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQVV0Qix1Q0FBdUM7QUFDdkMsSUFBTSxTQUFTLEdBQWM7SUFDM0IsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGVBQWUsRUFBRSxFQUFFO0NBQ3BCLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVhY2hlciBpbnRlcmZhY2Ugd2l0aCByZXF1aXJlZCBhbmQgb3B0aW9uYWwgZmllbGRzXG4gKiBVc2VzIGluZGV4IHNpZ25hdHVyZSB0byBhbGxvdyBmb3IgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG4gKi9cbmludGVyZmFjZSBUZWFjaGVyIHtcbiAgcmVhZG9ubHkgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTsgLy8gSW5kZXggc2lnbmF0dXJlIHRvIGFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllc1xufVxuXG4vLyBFeGFtcGxlIHVzYWdlIG9mIFRlYWNoZXIgaW50ZXJmYWNlXG5jb25zdCB0ZWFjaGVyMzogVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgY29udHJhY3Q6IGZhbHNlLFxufTtcblxuY29uc29sZS5sb2codGVhY2hlcjMpO1xuXG4vLyBBbm90aGVyIGV4YW1wbGUgd2l0aCBtb3JlIHByb3BlcnRpZXNcbmNvbnN0IHRlYWNoZXI0OiBUZWFjaGVyID0ge1xuICBmaXJzdE5hbWU6ICdKYW5lJyxcbiAgbGFzdE5hbWU6ICdTbWl0aCcsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG4gIHllYXJzT2ZFeHBlcmllbmNlOiA1LFxuICBsb2NhdGlvbjogJ05ldyBZb3JrJyxcbiAgY29udHJhY3Q6IHRydWUsXG4gIHJhdGluZzogNC43LFxuICBkZXBhcnRtZW50OiAnQ29tcHV0ZXIgU2NpZW5jZScsXG59O1xuXG5jb25zb2xlLmxvZyh0ZWFjaGVyNCk7XG5cbi8qKlxuICogRGlyZWN0b3JzIGludGVyZmFjZSB0aGF0IGV4dGVuZHMgVGVhY2hlclxuICogQWRkcyByZXF1aXJlZCBudW1iZXJPZlJlcG9ydHMgZmllbGRcbiAqL1xuaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuLy8gRXhhbXBsZSB1c2FnZSBvZiBEaXJlY3RvcnMgaW50ZXJmYWNlXG5jb25zdCBkaXJlY3RvcjE6IERpcmVjdG9ycyA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgbG9jYXRpb246ICdMb25kb24nLFxuICBmdWxsVGltZUVtcGxveWVlOiB0cnVlLFxuICBudW1iZXJPZlJlcG9ydHM6IDE3LFxufTtcblxuY29uc29sZS5sb2coZGlyZWN0b3IxKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==