# What are JSON Web Tokens?

• Open-source industry standard (RFC-7519) •
• Usable for Authorization or secure exchange of information between parties.
• Verify that the sender is who it/he/she claims to be.
• Signed by the issuer, using a secret or keypair (HMAC algorithm, RSA or ECDSA) •

# Jwt structure

![structure](<Screenshot 2024-08-07 at 5.36.50 PM.png>)

![example](<Screenshot 2024-08-07 at 5.41.18 PM.png>)

![alt validating ](<Screenshot 2024-08-07 at 5.42.48 PM.png>)

![rejecting token](<Screenshot 2024-08-07 at 5.45.30 PM.png>)

# More about JSON Web Tokens

JSON Web Tokens can be decoded by anyone. They should not contain sensitive information such as passwords.
It is useful for front-end applications to use these tokens to toggle features conditionally. For example, if a user is an administrator, we could show or hide a certain button based on the claims in the token.
Finally - JWTs should ideally be short-lived.
