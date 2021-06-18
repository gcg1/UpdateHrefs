let ProfileFooterLink = document.querySelector(
  ".Profile .PoweredBy .HyperLink"
);

let PropertyFooterLink = document.querySelector(
  ".PropCard .PoweredBy .HyperLink"
);

const updateProfileFooterLinlks = () => {
  ProfileFooterLink.setAttribute(
    "href",
    "https://getpropcard.com/?utm_source=agentsite&utm_campaign=footers"
  );
};

const updatePropertyFooterLinks = () => {
  PropertyFooterLink.setAttribute(
    "href",
    "https://getpropcard.com/?utm_source=propsite&utm_campaign=footers"
  );
};

console.log(PropertyFooterLink);

if (ProfileFooterLink !== null) {
  updateProfileFooterLinlks();
} else if (PropertyFooterLink !== null) {
  updatePropertyFooterLinks();
} else {
  setTimeout(() => {
    PropertyFooterLink = document.querySelector(
      ".PropCard .PoweredBy .HyperLink"
    );
    updatePropertyFooterLinks();
  }, 2200);
}
