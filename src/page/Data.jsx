import React from "react";
import * as XLSX from "xlsx";

const TableSchemaExport = () => {
  // kyc
  //   const data = [
  //     ["KycID", "int", "NO", "PRIMARY KEY", "AUTO_INCREMENT"],
  //     ["ClientID", "char(36)", "NO", "", ""],
  //     [
  //       "ClientTypeID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "from master_tbl_parameter_clienttype",
  //     ],
  //     ["SAAgencyID", "int", "YES", "FOREIGN KEY", "from web_tbl_sa_agency"],
  //     [
  //       "ClientStatusID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "from master_tbl_parameter_clientstatus",
  //     ],
  //     [
  //       "RiskProfileID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "Default 3, From mfrs_tbl_parameter_riskprofile",
  //     ],
  //     ["SID", "varchar(16)", "YES", "", 'Default ""'],
  //     ["IFUA", "varchar(100)", "YES", "", ""],
  //     ["BRD", "varchar(45)", "YES", "", 'Default ""'],
  //     ["FirstTitle", "varchar(20)", "YES", "", ""],
  //     ["FirstName", "varchar(100)", "YES", "", ""],
  //     ["LastName", "varchar(100)", "YES", "", ""],
  //     ["LastTitle", "varchar(20)", "YES", "", ""],
  //     ["UserImageFile", "varchar(255)", "YES", "", ""],
  //     ["Sex", "char(1)", "YES", "", ""],
  //     [
  //       "NationalityID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "from master_tbl_parameter_country",
  //     ],
  //     ["BirthPlace", "varchar(100)", "YES", "", ""],
  //     ["BirthDate", "datetime", "YES", "", ""],
  //     ["MotherName", "varchar(100)", "YES", "", ""],
  //     [
  //       "DocumentTypeID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "DocumentType = Identity Type",
  //     ],
  //     ["IdentityNo", "varchar(100)", "YES", "", ""],
  //     ["IdentityExpDate", "datetime", "YES", "", ""],
  //     ["NPWP", "varchar(100)", "YES", "", ""],
  //     [
  //       "MaritalStatusID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "from master_tbl_parameter_maritalstatus",
  //     ],
  //     ["SpouseName", "varchar(255)", "YES", "", ""],
  //     ["HeirName", "varchar(255)", "YES", "", ""],
  //     ["HeirRelation", "varchar(100)", "YES", "", ""],
  //     [
  //       "EducationLevelID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "from master_tbl_parameter_educationlevel",
  //     ],
  //     [
  //       "ReligionID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "from master_tbl_parameter_religion",
  //     ],
  //     ["Address", "text", "YES", "", ""],
  //     ["City", "text", "YES", "", ""],
  //     ["CityCode", "int", "YES", "", ""],
  //     ["Postcode", "varchar(20)", "YES", "", ""],
  //     ["ProvinceID", "int", "YES", "", ""],
  //     [
  //       "CountryID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "from master_tbl_parameter_country",
  //     ],
  //     ["Phone", "varchar(20)", "YES", "", ""],
  //     ["MobilePhone", "varchar(20)", "YES", "", ""],
  //     ["Fax", "varchar(20)", "YES", "", ""],
  //     ["Email", "varchar(100)", "YES", "", ""],
  //     ["CorrespondenceAddress", "text", "YES", "", ""],
  //     ["CorrespondenceCity", "text", "YES", "", ""],
  //     ["CorrespondenceCityCode", "int", "YES", "", ""],
  //     ["CorrespondencePostcode", "varchar(20)", "YES", "", ""],
  //     ["CorrespondenceProvinceID", "int", "YES", "", ""],
  //     [
  //       "CorrespondenceCountryID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "from master_tbl_parameter_country",
  //     ],
  //     ["CorrespondencePhone", "varchar(20)", "YES", "", ""],
  //     ["CorrespondenceMobilePhone", "varchar(20)", "YES", "", ""],
  //     ["CorrespondenceEmail", "varchar(255)", "YES", "", ""],
  //     ["CorrespondenceFax", "varchar(20)", "YES", "", ""],
  //     [
  //       "OccupationID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "from master_tbl_parameter_occupation",
  //     ],
  //     ["OfficeName", "varchar(200)", "YES", "", ""],
  //     ["OfficeAddress", "text", "YES", "", ""],
  //     ["OfficePosition", "varchar(100)", "YES", "", ""],
  //     [
  //       "BusinessActivityID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "from master_tbl_parameter_businessactivity",
  //     ],
  //     [
  //       "SourceFundID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "from master_tbl_parameter_sourcefundpersonal",
  //     ],
  //     ["BeneficialOwner", "int", "YES", "", "Default 1"],
  //     ["BeneficialOwnerName", "varchar(50)", "YES", "", ""],
  //     ["Fatca", "int", "YES", "", ""],
  //     [
  //       "AnnualIncomeID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "from master_tbl_parameter_annualincomepersonal",
  //     ],
  //     [
  //       "InvestmentObjectiveID",
  //       "int",
  //       "YES",
  //       "FOREIGN KEY",
  //       "from master_tbl_parameter_investmentobjective",
  //     ],
  //     ["IdentityCardImage", "text", "YES", "", ""],
  //     ["NPWPImage", "text", "YES", "", ""],
  //     ["ActiveDate", "datetime", "YES", "", ""],
  //     ["cdate", "datetime", "YES", "", ""],
  //     ["mdate", "datetime", "YES", "", ""],
  //     ["status", "varchar(100)", "YES", "", "1 = draft, 2 = approve"],
  //     ["notes", "varchar(100)", "YES", "", ""],
  //     ["approvalDate", "datetime", "YES", "", ""],
  //     ["adminMarketing", "varchar(155)", "YES", "", ""],
  //     ["adminCompliance", "varchar(155)", "YES", "", ""],
  //     ["DocSignature", "varchar(255)", "YES", "", ""],
  //     ["ClientIDBTIM", "varchar(255)", "YES", "", ""],
  //   ];

  //   user
  //   const data = [
  //     ["Field Name", "Data Type", "Nullable", "Key", "Additional Info"],
  //     ["UserID", "int", "NO", "PRIMARY KEY", "AUTO_INCREMENT"],
  //     ["UserLogin", "varchar(255)", "YES", "UNIQUE KEY", ""],
  //     ["UserPassword", "varchar(255)", "YES", "UNIQUE KEY", ""],
  //     ["PasswordUpdateCounter", "int", "YES", "", ""],
  //     ["UserPhone", "varchar(20)", "YES", "UNIQUE KEY", ""],
  //     ["PhoneUpdateCounter", "int", "YES", "", ""],
  //     ["UserHashKey", "varchar(100)", "YES", "UNIQUE KEY", ""],
  //     ["UserStatus", "tinyint", "YES", "", "Default 0"],
  //     ["FlagPasswordReset", "tinyint", "YES", "", ""],
  //     ["FlagConfirmEmail", "tinyint", "YES", "", ""],
  //     ["FlagConfirmEmailDate", "datetime", "YES", "", ""],
  //     ["FlagConfirmPhone", "tinyint", "YES", "", ""],
  //     ["FlagConfirmPhoneDate", "datetime", "YES", "", ""],
  //     ["FlagPasswordChange", "tinyint", "YES", "", "Default 1"],
  //     ["KeywordConfirmEmail", "varchar(100)", "YES", "", ""],
  //     ["KeywordConfirmPhone", "varchar(100)", "YES", "", ""],
  //     ["UserLockStatus", "tinyint", "YES", "", ""],
  //     ["UserLockCounter", "tinyint", "YES", "", ""],
  //     ["UserLockDate", "datetime", "YES", "", ""],
  //     ["SendEmailNotif", "char(2)", "YES", "", ""],
  //     ["KycID", "int", "YES", "", ""],
  //     ["LastLogin", "datetime", "YES", "", ""],
  //     ["cdate", "datetime", "YES", "", ""],
  //     ["mdate", "datetime", "YES", "", ""],
  //     ["PushId", "varchar(100)", "YES", "", ""],
  //     ["EmailGoogle", "varchar(100)", "YES", "", ""],
  //     ["GoogleId", "varchar(100)", "YES", "", ""],
  //     ["EmailApple", "varchar(100)", "YES", "", ""],
  //     ["AppleId", "varchar(100)", "YES", "", ""],
  //     ["FlagFingerprint", "tinyint", "YES", "", ""],
  //     ["FingerKey", "varchar(255)", "YES", "", ""],
  //     ["AccessToken", "varchar(100)", "YES", "UNIQUE KEY", ""],
  //   ];

  //   sec_tbl_portfolio
  const data = [
    ["Field Name", "Data Type", "Nullable", "Key", "Additional Info"],
    ["portfolio_id", "int unsigned", "NO", "PRIMARY KEY", "AUTO_INCREMENT"],
    ["portfolio_code", "varchar(20)", "YES", "UNIQUE KEY", ""],
    ["portfolio_name", "varchar(255)", "YES", "", ""],
    ["portfolio_description", "text", "YES", "", ""],
    ["portfolio_short_name", "varchar(100)", "YES", "", ""],
    ["portfolio_inception_date", "datetime", "YES", "", ""],
    [
      "portfolio_type_id",
      "int unsigned",
      "YES",
      "FOREIGN KEY",
      "References sec_tbl_parameter_portfolio_type",
    ],
    [
      "portfolio_asset_type_id",
      "int unsigned",
      "YES",
      "FOREIGN KEY",
      "References sec_tbl_parameter_portfolio_assettype",
    ],
    [
      "portfolio_account_type_id",
      "int unsigned",
      "YES",
      "FOREIGN KEY",
      "References sec_tbl_parameter_portfolio_accounttype",
    ],
    [
      "portfolio_return_type_id",
      "int",
      "YES",
      "FOREIGN KEY",
      "References sec_tbl_parameter_portfolio_returntype",
    ],
    [
      "portfolio_days_type_id",
      "int",
      "YES",
      "FOREIGN KEY",
      "References sec_tbl_parameter_portfolio_daystype",
    ],
    ["portfolio_sector_class_id", "int", "YES", "", ""],
    ["portfolio_exchange_id", "int", "YES", "", ""],
    [
      "portfolio_status_id",
      "int unsigned",
      "YES",
      "FOREIGN KEY",
      "References sec_tbl_parameter_portfolio_status",
    ],
    [
      "portfolio_ccy_id",
      "int",
      "YES",
      "FOREIGN KEY",
      "References master_tbl_parameter_country",
    ],
    ["portfolio_custodian_id", "int", "YES", "", ""],
    [
      "portfolio_base_ccy_id",
      "int",
      "YES",
      "FOREIGN KEY",
      "References master_tbl_parameter_country",
    ],
    ["portfolio_benchmark_id", "int", "YES", "", ""],
    [
      "portfolio_pricing_id",
      "int unsigned",
      "YES",
      "FOREIGN KEY",
      "References sec_tbl_parameter_pricing",
    ],
    ["portfolio_ss_type", "tinyint", "YES", "", ""],
    ["portfolio_rating_id", "char(18)", "YES", "", ""],
    ["portfolio_uuid", "char(36)", "YES", "", ""],
    ["minimum_subscription_amount", "decimal(20,0)", "YES", "", ""],
    ["minimum_subscription_description", "text", "YES", "", ""],
    [
      "risk_profile_id",
      "int",
      "YES",
      "FOREIGN KEY",
      "References mfrs_tbl_parameter_riskprofile",
    ],
    ["portfolio_category_id", "int", "YES", "", ""],
    ["ticker", "varchar(100)", "YES", "", ""],
    ["flag_switch", "char(4)", "YES", "", ""],
    ["flag_syariah", "char(4)", "YES", "", ""],
    ["flag_published", "char(4)", "YES", "", 'Default "0"'],
    ["prev_min_subscription", "decimal(20,0)", "YES", "", ""],
    ["deleted_at", "timestamp", "YES", "", ""],
    ["flag_tranding", "char(8)", "YES", "", ""],
    ["min_redeem", "decimal(10,0)", "YES", "", ""],
    ["min_switch", "decimal(10,0)", "YES", "", ""],
    ["non_view", "int", "YES", "", "Default 0"],
  ];

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);

    // Set column widths
    ws["!cols"] = [
      { wch: 25 }, // Field Name
      { wch: 15 }, // Data Type
      { wch: 10 }, // Nullable
      { wch: 15 }, // Key
      { wch: 40 }, // Additional Info
    ];

    XLSX.utils.book_append_sheet(wb, ws, "Table Schema");
    XLSX.writeFile(wb, "client_tbl_kyc_schema.xlsx");
  };

  return (
    <div className="p-4">
      {/* <button
        onClick={exportToExcel}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Export to Excel
      </button> */}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Field Name</th>
              <th className="px-4 py-2 border">Data Type</th>
              <th className="px-4 py-2 border">Nullable</th>
              <th className="px-4 py-2 border">Key</th>
              <th className="px-4 py-2 border">Additional Info</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="px-4 py-2 border">{row[0]}</td>
                <td className="px-4 py-2 border">{row[1]}</td>
                <td className="px-4 py-2 border">{row[2]}</td>
                <td className="px-4 py-2 border">{row[3]}</td>
                <td className="px-4 py-2 border">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSchemaExport;
