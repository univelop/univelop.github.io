---
title: E-Mail-Versand
nav_order: 1
layout: title
parent: Arbeitsbereich Einstellungen
redirect_from:
    - /docs/azure-mailing.html
---

Um aus Univelop heraus Mails über die Azure-Plattform senden oder abrufen zu können, muss in Azure AD eine App angelegt und drei Werte dieser in Univelop eingepflegt werden:

![univelop_settings](/old_assets/azure-mail-setup/0_univelop_settings.png 'Univelop Settings')

Um diese App anzulegen, folge bitte folgenden Schritten:

![1_app_registrations](/old_assets/azure-mail-setup/1_app_registrations.png 'App Registration')

![2_new_registration](/old_assets/azure-mail-setup/2_new_registration.png 'New Registration')

![3_register_application](/old_assets/azure-mail-setup/3_register_application.png 'Register Application')

![4_values_app](/old_assets/azure-mail-setup/4_values_app.png 'Values App')

![5_create_secret](/old_assets/azure-mail-setup/5_create_secret.png 'Create Secret')

![6_add_secret](/old_assets/azure-mail-setup/6_add_secret.png 'Add Secret')

![7_copy_value](/old_assets/azure-mail-setup/7_copy_value.png 'Copy Value')

Nachdem diese Werte erstellt und in Univelop eingetragen wurden, müssen noch die richtigen Berechtigungen gesetzt werden. Um Mails versenden zu können, werden die beiden Microsoft Graph Berechtigungen "User.Read.All" und "Mail.Send" benötigt. Sollen auch E-Mails abgerufen werden können, ist ebenfalls die Berechtigung "Mail.ReadWrite" notwendig.

![8_permissions](/old_assets/azure-mail-setup/8_permissions.png 'Permissions')

![9_microsoft_graph](/old_assets/azure-mail-setup/9_microsoft_graph.png 'Microsoft Graph')

![10_user_read_all](/old_assets/azure-mail-setup/10_user_read_all.png 'User.Read.All')

![11_mail_send](/old_assets/azure-mail-setup/11_mail_send.png 'Mail.Send')

![12_grant_consent](/old_assets/azure-mail-setup/12_grant_consent.png 'Grant admin consent')
