package de.neuefische.koheis.backend.kanacards;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class KanaCardsIntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @DirtiesContext
    @Test
    void expectTwoDimensionalArrayOfNineKanaCards() throws Exception {
        //WHEN
        String result = mockMvc.perform(
                        MockMvcRequestBuilders.get("/api/kana_cards/hiragana")
                )
                .andExpect(status().isOk())
                .andReturn()
                .getResponse()
                .getContentAsString();

        JSONObject json = new JSONObject(result);
        JSONArray cardsGrid = json.getJSONArray("cardsGrid");

        //THEN
        int expectedRows = 3;
        int expectedCols = 3;
        assertEquals(expectedRows, cardsGrid.length());
        for (int i = 0; i < cardsGrid.length(); i++) {
            JSONArray row = cardsGrid.getJSONArray(i);
            assertEquals(expectedCols, row.length());
        }
    }

}
