import { test, expect } from "@playwright/test";

test("Verificar mensaje de confirmación de voto al acceder a un auto", async ({ page }) => {
  // 1️⃣ Ingresar al sitio
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  // 2️⃣ Iniciar sesión
  await page.fill('input[placeholder="Login"]', "selvinfadds");
  await page.fill('input[type="password"]', "PJM3M67Mz8i*qUT");
  await page.click('button.btn-success');

  // 🔍 Verificar que se haya iniciado sesión (ver si aparece el enlace de perfil)
  await expect(page.locator('a[href="/profile"]')).toBeVisible({ timeout: 5000 });

  // 3️⃣ Ir a Lamborghini → Diablo
  await page.click('img[title="Lamborghini"]');
  await page.click('text=Diablo');

  // 4️⃣ Esperar el mensaje que indica el voto
  const mensaje = page.locator(".card-text");
  await expect(mensaje).toContainText("Thank you for your vote!", { timeout: 10000 });
});
