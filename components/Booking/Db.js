export async function insertOrder(payload) {
  const url = "https://vixqydjnpjfivynbkcev.supabase.co";
  const res = await fetch(url + "/rest/v1/orders", {
    method: "POST",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeHF5ZGpucGpmaXZ5bmJrY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4MTYsImV4cCI6MTk4MjE3NDgxNn0.ZpCqZ-NGVr--Shy5gIhAsap8x7bM9hIetyWffTdJYpE",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeHF5ZGpucGpmaXZ5bmJrY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4MTYsImV4cCI6MTk4MjE3NDgxNn0.ZpCqZ-NGVr--Shy5gIhAsap8x7bM9hIetyWffTdJYpE",
      Prefer: '"return=minimal"',
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return await res.json();
}

//Here we fetch and return the data in the in the data base, sent by the form to the supabase.

//*************************************** */

// The (payload) argument of the function here ---> Is the object in the callback function in Payment.js
// The body here stringify that object.

//*********************************** */

// 10. We ask the function to return something, the array ( posted ? ).
// 11. We make the function async and create a const res with await for the fetching.

//*********************************** */

// 12. In CheckoutForm the submit function is the ASYNC and insertOrder() the AWAIT value of the const to be returned.
