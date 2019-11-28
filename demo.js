
const value = [ { HubId: 1 }, { HubId: 2 }, { HubId: 3 }]

const regions = [
  { HubId: 1, name: "a" },
  { HubId: 1, name: "b" },
  { HubId: 3, name: "a" },
  { HubId: 4, name: "a" },
  { HubId: 2, name: "a" },
  { HubId: 3, name: "a" },
  { HubId: 4, name: "a" },
  { HubId: 4, name: "a" },
  { HubId: 5, name: "a" },
  { HubId: 6, name: "a" },
  { HubId: 7, name: "a" },
  { HubId: 8, name: "a" },
  { HubId: 9, name: "a" },
  { HubId: 11, name: "a" },
  { HubId: 12, name: "a" },
  { HubId: 14, name: "a" },
  { HubId: 15, name: "a" },
  { HubId: 122, name: "a" },
  { HubId: 1111, name: "a" },
  { HubId: 10001, name: "a" },
  { HubId: 3, name: "a" },
  { HubId: 2, name: "a" },
  { HubId: 4, name: "a" },
  { HubId: 2, name: "a" }
  
]

var filtered = regions.filter(function(item) {
  return value.indexOf(item.HubId) !== -1 ;
});
console.log(filtered);
