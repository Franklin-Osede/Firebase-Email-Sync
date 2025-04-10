const admin = require('firebase-admin');

// Usar las credenciales proporcionadas directamente
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "domoblock-dapp",
    privateKeyId: "8e61ffdce78cb6e4687546fd0b3a1a236d463450",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDkI6OcJHp4HhJf\nBV27T3N9TTARxlh0Xfpyb1TRPuVeUVm8+3sSQQSiWUFt5lQGeCgXYsa5e7JIHnV/\nUGC+UmnwhvCfOS/3RSzjO1axksWfPCMoyW3KFQcovaGH7bpCgg7GHe34vDIEOLQy\nrrHcf3kzP8Z8pWDyF+0Bxuy/evRa6cN1eHUwe119czMbs0mov2DIeNSmxANDzilR\nS1WoSDoHMMWLjVuWLEGbN1iswULUU3bIZeNtGJsZ2AbPLtHpfqsuzf7mPb2pnOUI\nHxlifMmZUnKx/6y6qETgHJKL7D8jsnWRvVTc2H7yzo2s1gqCWFY1sMG0MX5GXjn0\nAl8FI5dtAgMBAAECggEAA6ZwnNiokYtuMz8BBOtX8I5vmnShZIj1ipTlbfFZ9rWA\nyX3aSIfpyDYNYM1XMIoqegwrHBbpbQqLJZSdXDdWfgRqsbzpEmoHNmb0E5IeLQ15\n1xuB8Qt/XvgS5iAl41cZX7NAmudaOhXr4wX+PM80LTrhtPlpjohW5Us9f54628l9\nZdpd+9u387Ta6Aw1X1Wjoy7vBN19ELU4x7BHqkX0/q5WD6qw0+YZBEYTM60Nm/iv\ngsnLl6IkVDr647/0/fCTBoV1z3sqW37g9OUE0L6nvQtw82oFTfEPvUk5/mIGHJ3d\nTixwhzIvRgFIA2+bI8IR4RODnWqPOTWXcGWrgabTMQKBgQDtCNtgsa1czk9p1ttC\nCO5vm+zTEz3zwBveb+Z0Sv3ln4BTPfCKz+oPE66sL9kw59dsEm/Iyl4k17ccGCXx\n0HHFmXGngkqFe3WzELs9X0i4360Kbk22dDEuupbirpdKP8GL8CAO35wQyQFrJSLF\n0E5O3aJ7YBW0UwUx+rFwCSLqdwKBgQD2ZJRUrzeoYB6vGYhxEMf8RgHpfX8r/wXG\nQ31QEdaTcnSOInXFih0A+4xt1tPyJPvRx6OheLsrLljvfUfAqeW87Y06a/FgILzH\nTAI0K6afy7Qgat6RsrR6lA6VCNrD1f7zzmOxo9h/IxviLjph3mMN+EqDfFCBvbd1\n1yUC9dpiOwKBgQDA//8wQju4XzwGH62znPYX5kv0qaw99mQ6v75TXmRRPYgNP1fG\njvgzgoEtLmCYE44yLujaAvyY3xP3SipLNMAOdpw2Gj53ZUk2nh73H8hkz6tj3OBl\n+UG6nK8Sr7n7+OGtAb34nlXCzQfcqAYiLzQzvv73mgrSIu8N/OPRJ39IjQKBgQDH\nyfSw2kciQ5Z92xFUxQu0Vrv0LWuyLB7tjgoNo/k/JB64pd6jaANuqYpMAldn0G9U\nwjG/m9sA/5rjzs0gv2LnGCRdS+u0S7dnTw22afK5Pf74DlAdCi/n+Sf91uk0xM/v\nt9oEz9ub88cHVv7GHwJo8HzTMzlAiqo5ZlO/m8URwwKBgQDhfNHVfJ5eXjTkv5SP\negbuG70ehv0KjpZaLYz98S5s0rvQRjtjPg4DEJGHVoxcR0NECzXo4/kAizX+nSBr\nlTrdFpUsxu4oX5N25e+GoiPReI5MMoIQz+aapGrLv3Mr1LMwLEQMvTzKCXKek7on\nO+0z48fRa/OlkuM/ZhBYTKa62A==\n-----END PRIVATE KEY-----\n",
    clientEmail: "domoblock-dapp@appspot.gserviceaccount.com",
    clientId: "104589349502215910027"
  })
});

// Email antiguo y nuevo
const oldEmail = 'mariamaradominguez@gmail.com';
const newEmail = 'dominguezrodrigomm@gmail.com';

// Primero busca el usuario en Auth
admin.auth().getUserByEmail(oldEmail)
  .then((userRecord) => {
    // Actualiza el email en Auth
    return admin.auth().updateUser(userRecord.uid, {
      email: newEmail,
      emailVerified: true, // Cambiado a true para que no requiera verificación
    });
  })
  .then((userRecord) => {
    console.log('Email actualizado en Auth:', userRecord.toJSON());

    // Actualiza el email en Firestore
    return admin.firestore().collection('users').where('email', '==', oldEmail).get();
  })
  .then((querySnapshot) => {
    // Actualiza cada documento encontrado
    const batch = admin.firestore().batch();
    querySnapshot.forEach((doc) => {
      batch.update(doc.ref, { email: newEmail });
    });
    return batch.commit();
  })
  .then(() => {
    console.log('Email actualizado en Firestore');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  }); 