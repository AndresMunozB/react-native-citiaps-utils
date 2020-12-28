/**FIREBASE HANDLER ERRORS */

export default errorCode => {
    switch (errorCode) {
        case "auth/email-already-in-use":
            return "El email ingresado ya ha sido registrado";
        case "auth/invalid-email":
            return "El email ingresado no es válido";
        case "auth/operation-not-allowed":
            return "El método de autenticación no está activado";
        case "auth/weak-password":
            return "La contraseña ingresada es demasiado corta, minimo 6 caracteres";
        case "auth/provider-already-linked":
            return "El email ingresado ya ha sido registrado";
        case "auth/credential-already-in-use":
            return "El email ingresado ya ha sido registrado";
        case "auth/account-exists-with-different-credential":
            return "El email ingresado ya ha sido registrado";
        case "auth/user-disabled":
            return "El usuario se encuentra deshabilitado";
        case "auth/user-not-found":
            return "Usuario no encontrado";
        case "auth/wrong-password":
            return "Contraseña errónea";
        case "auth/invalid-verification-id":
            return "Crendenciales invalidas";
        case "missing-android-pkg-name":
            return "Nuestro sistema presenta problemas, itente mas tarde"
        case "auth/missing-continue-uri":
            return "Nuestro sistema presenta problemas, itente mas tarde"
        case "auth/missing-ios-bundle-id":
            return "Nuestro sistema presenta problemas, itente mas tarde"
        case "auth/invalid-continue-uri":
            return "Nuestro sistema presenta problemas, itente mas tarde"
        case "auth/unauthorized-continue-uri":
            return "Nuestro sistema presenta problemas, itente mas tarde"
        default:
            return ""
    }
}