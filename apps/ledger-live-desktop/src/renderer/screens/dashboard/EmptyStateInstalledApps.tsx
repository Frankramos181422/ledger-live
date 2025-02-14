import React, { useCallback } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { languageSelector } from "~/renderer/reducers/settings";
import Box from "~/renderer/components/Box";
import Button from "~/renderer/components/Button";
import Image from "~/renderer/components/Image";
import NoApps from "~/renderer/images/no-apps.svg";
import Text from "~/renderer/components/Text";
import LinkHelp from "~/renderer/components/LinkHelp";
import { openURL } from "~/renderer/linking";
import { withTheme } from "styled-components";
import { urls } from "~/config/urls";

const EmptyStateInstalledApps = ({ theme }: { theme: any }) => {
  const { push } = useHistory();
  const { t } = useTranslation();
  const locale = useSelector(languageSelector) || "en";
  const handleInstallApp = useCallback(() => {
    push("/manager");
  }, [push]);
  return (
    <Box
      alignItems="center"
      pb={8}
      style={{
        margin: "auto",
      }}
    >
      <Image alt="emptyState Dashboard logo" resource={NoApps} width="250" />
      <Box mt={5} alignItems="center">
        <Text ff="Inter|SemiBold" color="palette.text.shade100" fontSize={5}>
          {t("emptyState.dashboard.title")}
        </Text>
        <Box mt={3}>
          <Text
            ff="Inter|Regular"
            color="palette.text.shade60"
            textAlign="center"
            fontSize={4}
            style={{
              maxWidth: 440,
            }}
          >
            {t("emptyState.dashboard.desc")}
          </Text>
        </Box>
        <Box
          mt={5}
          horizontal
          style={{
            width: 300,
          }}
          flow={3}
          justifyContent="center"
        >
          <Button primary onClick={handleInstallApp} data-e2e="dashboard_empty_OpenManager">
            {t("emptyState.dashboard.buttons.installApp")}
          </Button>
        </Box>
        <Box mt={5} justifyContent="center">
          <LinkHelp
            style={{
              color: theme.colors.palette.text.shade60,
            }}
            iconSize={14}
            label={<Trans i18nKey="emptyState.dashboard.buttons.help" />}
            onClick={() =>
              openURL(urls.faq[locale in urls.faq ? (locale as keyof typeof urls.faq) : "en"])
            }
          />
        </Box>
      </Box>
    </Box>
  );
};
export default React.memo<{}>(withTheme(EmptyStateInstalledApps));
