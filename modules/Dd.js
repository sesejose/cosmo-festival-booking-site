export async function insertOrder(payload) {
  const url = "https://udfchraccrfladlsvbzh.supabase.co";
  const res = await fetch(url + "/rest/v1/cosmo_festival", {
    method: "POST",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
      Prefer: "return=minimal",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return await res.json();
}

//Here we fetch and return the data in the in the data base, sent by the form to the supabase.

//*************************************** */

// The (payload) argument of the function here ---> Is the object in the callback function in CheckOutForm.jsx
// The body here stringify that object.

//*********************************** */

// 10. We ask the function to return something, the array in the basket.
// 11. We make the function async and create a const res with await for the fetching.

//*********************************** */

// 12. In CheckoutForm the submit function is the ASYNC and insertOrder() the AWAIT value of the const to be returned.
