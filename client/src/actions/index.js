export function loadContacts() {
  return function (dispatch) {
    fetch("/contacts")
    .then( (response) => {
      return response.json();
    }).then((contacts) => {
      dispatch(contactsLoaded(contacts));
    });
  };
}
function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
}

export function loadVehicles() {
  return function (dispatch) {
    fetch("/vehicles")
    .then( (response) => {
      return response.json();
    }).then((vehicles) => {
      dispatch(vehiclesLoaded(vehicles));
    });
  };
}
function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}
export function loadComments() {
  return function (dispatch) {
    fetch("/comments")
    .then( (response) => {
      return response.json();
    }).then((comments) => {
      dispatch(commentsLoaded(comments));
    });
  };
}
function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}
export function loadProducts() {
  return function (dispatch) {
    fetch("/products")
    .then( (response) => {
      return response.json();
    }).then((products) => {
      dispatch(productsLoaded(products));
    });
  };
}
function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
}

function commentLoaded(comments) {
  return {
    type: "GET_COMMENT_DONE",
    value: comments
  }
}
export function loadComment(id) {
  return function (dispatch) {
    fetch(`/comment/${id}`)
    .then( (res) => {
      return res.json();
    }).then( (comments) => {
      dispatch(commentLoaded(comments));
    });
  };
}

const contactLoaded = (contacts) => ({type: "GET_CONTACT_DONE", value: contacts});
export const loadContact = (id) => (
  (dispatch) => {
    fetch(`/contacts/${id}`)
    .then( (res) => res.json())
    .then( (contacts) => {
      dispatch(contactLoaded(contacts))
    });
  }
);

function productLoaded(products) {
  return {
    type: "GET_PRODUCT_DONE",
    value: products
  }
}
export function loadProduct(id) {
  return function (dispatch) {
    fetch(`/products/${id}`)
    .then( (res) => {
      return res.json();
    }).then( (products) => {
      dispatch(productLoaded(products));
    });
  };
}

function vehicleLoaded(vehicles) {
  return {
    type: "GET_VEHICLE_DONE",
    value: vehicles
  }
}
export function loadVehicle(id) {
  return function (dispatch) {
    fetch(`/vehicle/${id}`)
    .then( (res) => {
      return res.json();
    }).then( (vehicles) => {
      dispatch(vehicleLoaded(vehicles));
    });
  };
}

export function createProduct(products) {
  return function (dispatch) {
    fetch("/products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(products)
    }).then(() => dispatch(loadProducts()));
  };
}
export function createContact(c) {
  return function (dispatch) {
    fetch("/contacts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadContacts()));
  };
}
export function createVehicle(v) {
  return function (dispatch) {
    fetch("/vehicles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadVehicles()));
  };
}
export function createComment(c) {
  return function (dispatch) {
    fetch("/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadComments()));
  };
}
