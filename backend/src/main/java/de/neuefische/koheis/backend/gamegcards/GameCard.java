package de.neuefische.koheis.backend.gamegcards;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("cards")
public class GameCard {
    @Id
    private String id;
    private String title;
    private String cardSetName;
}
