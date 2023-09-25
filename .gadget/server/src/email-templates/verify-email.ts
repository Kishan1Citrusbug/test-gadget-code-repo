export const VERIFY_EMAIL_TEMPLATE = `
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tbody>
    <tr>
      <td width="100%">
        <div style="max-width:600px;Margin:0 auto">
          <table
            align="center"
            cellpadding="0"
            cellspacing="0"
            style="border-spacing:0;font-family:gt-eesti,ArialMT,Helvetica,Arial,sans-serif;Margin:0 auto;padding:24px;width:100%;max-width:500px"
          >
            <tbody>
              <tr>
                <td style="text-align:justify;word-break:break-word">
                  <table style="margin-bottom:20px;width:100%" width="100%">
                    <tbody>
                      <tr>
                        <td>
                          <table
                            style="width:100%;margin-bottom:20px"
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <strong style="font-family:Helvetica,Arial,sans-serif;color:#000000">Hi <%= name %>, </strong>

                                  <h1
                                    style="font-size:26px;line-height:30px;color:#000000;word-break:normal"
                                  >
                                  Welcome to <%= app_name %>! Please verify your email.
                                  </h1>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>

                            <table
                              style="background-color:#fff;margin-bottom:20px;table-layout:fixed"
                              align="center"
                              width=""
                              cellspacing="0"
                              cellpadding="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="background-color:#000;color:#fff;text-align:center;border-radius:4px;padding:16px 24px;border-color:transparent;font-weight:bold;font-size:16px;line-height:1"
                                  >
                                    <a style="color: white; text-decoration: none;" href= <%= link  %>> Verify Email </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>
                  <table width="100%" style="margin-bottom:20px;width:100%">
                    <tbody>
                      <tr>
                        <td width="100%">
                          <div
                            style="width:100%;height:1px;background-color:#ddd"
                            color="#DDD"
                            width="100%"
                          ></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </tbody>
</table>
`;
