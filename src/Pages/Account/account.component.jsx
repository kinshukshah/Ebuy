import React from "react";
import { BoxItem } from "../../components/box-item/box-item.component";
import { CustomButton } from "../../components/button-component/button-component";
import { useAuth } from "../../context/AuthContext";
import { logout } from "../../utils/Apicalls";
import "./account.styles.css";
export const AccountPage = () => {
  const {
    user: { user },
    dispatch,
  } = useAuth();
  return (
    <BoxItem>
      <div className="account-heading">My account</div>
      <div className="account-icon">
        <i class="fas fa-user"></i>
      </div>
      <div>
        <div className="user-detail">
          <div className="label">Name:</div>
          <div className="detail">{user.name}</div>
        </div>
        <div className="user-detail">
          <div className="label">Email:</div>
          <div className="detail">{user.email}</div>
        </div>
      </div>
      <CustomButton label="Logout" inverse onClick={() => logout(dispatch)} />
    </BoxItem>
  );
};
