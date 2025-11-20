const user1 = {
    accountStatus: "active", // Can be "active", "inactive", "pending"
    sessionToken: "someValidToken123", // Can be a string, null, or undefined
    userRoles: ["editor", "admin"], // Array of strings
    isSuspended: false, // Boolean
    suspensionReason: null // Can be a string or null
};

function checkUserAuthorizationState() {
    return (
    user.accountStatus === "active" &&                                  // la cuenta debe estar activa
    typeof user.sessionToken === "string" && user.sessionToken !== "" && // debe tener un token de sesión válido (cadena no vacía)
    Array.isArray(user.userRoles) && user.userRoles.includes("admin") && // debe tener el rol "admin" en su arreglo de roles
    (
      !user.isSuspended ||                                              // o no está suspendido
      (user.isSuspended && user.suspensionReason === "pending_review")  // o si está suspendido, su razón debe ser "pending_review"
    )
);
}

const users = [
    {
        accountStatus: "active",
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: false,
        suspensionReason: null
    },
    {
        accountStatus: "active",
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: true,
        suspensionReason: "pending_review"
    },
    {
        accountStatus: "active",
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: false,
        suspensionReason: null
    },
    {
        accountStatus: "inactive",
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: false,
        suspensionReason: null
    },
    {
        accountStatus: "active",
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: false,
        suspensionReason: null
    },
    {
        accountStatus: "active",
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: false,
        suspensionReason: "no_compliance"
    },
    {
        accountStatus: "active",
        sessionToken: "SomeValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: false,
        suspensionReason: null
    },
    {
        accountStatus: "active",
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: true,
        suspensionReason: "big_fault"
    },
    {
        accountStatus: "active",
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: false,
        suspensionReason: null
    }];