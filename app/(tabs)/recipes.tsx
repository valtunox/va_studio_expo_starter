import { useState } from 'react';
import { StyleSheet, ScrollView, View, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { useAppTheme } from '@/hooks/useAppTheme';
import { RECIPES, CATEGORIES } from '@/constants/MockData';

function RecipeCard({ recipe, colors }: { recipe: typeof RECIPES[0]; colors: any }) {
  return (
    <Pressable style={[s.recipeCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={[s.recipeEmoji, { backgroundColor: colors.tint + '12' }]}>
        <ThemedText style={{ fontSize: 36 }}>{recipe.emoji}</ThemedText>
      </View>
      <View style={s.recipeContent}>
        <ThemedText type="defaultSemiBold" style={{ fontSize: 15 }}>{recipe.title}</ThemedText>
        <View style={s.recipeMetaRow}>
          <View style={s.recipeMeta}>
            <Ionicons name="time-outline" size={12} color={colors.textSecondary} />
            <ThemedText type="muted" style={s.recipeMetaText}>{recipe.time}</ThemedText>
          </View>
          <View style={s.recipeMeta}>
            <Ionicons name="flame-outline" size={12} color={colors.textSecondary} />
            <ThemedText type="muted" style={s.recipeMetaText}>{recipe.calories} kcal</ThemedText>
          </View>
          <View style={s.recipeMeta}>
            <Ionicons name="star" size={12} color="#fbbf24" />
            <ThemedText type="muted" style={s.recipeMetaText}>{recipe.rating}</ThemedText>
          </View>
        </View>
        <View style={s.macroMini}>
          {[
            { label: 'P', value: recipe.protein, color: colors.protein },
            { label: 'C', value: recipe.carbs, color: colors.carbs },
            { label: 'F', value: recipe.fat, color: colors.fat },
          ].map(m => (
            <View key={m.label} style={[s.macroPill, { backgroundColor: m.color + '15' }]}>
              <ThemedText style={{ fontSize: 9, fontWeight: '800', color: m.color }}>{m.label} {m.value}g</ThemedText>
            </View>
          ))}
        </View>
      </View>
    </Pressable>
  );
}

export default function RecipesScreen() {
  const { colors } = useAppTheme();
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = RECIPES.filter(r =>
    (category === 'All' || r.category === category) &&
    (!search || r.title.toLowerCase().includes(search.toLowerCase()))
  );
  const featured = RECIPES.filter(r => r.featured);

  return (
    <ScrollView style={[s.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
      <View style={s.header}>
        <ThemedText type="title" style={{ fontSize: 28 }}>Recipes</ThemedText>
        <ThemedText type="muted" style={{ marginTop: 4 }}>Discover healthy meals</ThemedText>
      </View>

      {/* Search */}
      <View style={[s.searchBar, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Ionicons name="search" size={18} color={colors.textSecondary} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search recipes..."
          placeholderTextColor={colors.textSecondary}
          style={[s.searchInput, { color: colors.text }]}
        />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.catScroll} contentContainerStyle={{ paddingHorizontal: 20, gap: 8 }}>
        {CATEGORIES.map(c => (
          <Pressable key={c} onPress={() => setCategory(c)}
            style={[s.catPill, category === c
              ? { backgroundColor: colors.tint }
              : { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 },
            ]}>
            <ThemedText style={[s.catText, { color: category === c ? '#fff' : colors.textSecondary }]}>{c}</ThemedText>
          </Pressable>
        ))}
      </ScrollView>

      {/* Featured */}
      {category === 'All' && !search && (
        <View style={s.section}>
          <ThemedText type="defaultSemiBold" style={s.sectionTitle}>Featured</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}>
            {featured.map(r => (
              <Pressable key={r.id} style={[s.featCard, { backgroundColor: colors.tint + '12', borderColor: colors.tint + '25' }]}>
                <ThemedText style={{ fontSize: 40, marginBottom: 8 }}>{r.emoji}</ThemedText>
                <ThemedText type="defaultSemiBold" style={{ fontSize: 14 }}>{r.title}</ThemedText>
                <View style={s.featMeta}>
                  <ThemedText type="muted" style={{ fontSize: 11 }}>{r.calories} kcal</ThemedText>
                  <ThemedText type="muted" style={{ fontSize: 11 }}>·</ThemedText>
                  <ThemedText type="muted" style={{ fontSize: 11 }}>{r.time}</ThemedText>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}

      {/* All recipes */}
      <View style={[s.section, { paddingHorizontal: 20 }]}>
        <ThemedText type="defaultSemiBold" style={s.sectionTitle}>
          {category === 'All' ? 'All Recipes' : category} ({filtered.length})
        </ThemedText>
        {filtered.map(r => <RecipeCard key={r.id} recipe={r} colors={colors} />)}
        {filtered.length === 0 && (
          <View style={s.empty}>
            <ThemedText style={{ fontSize: 40, marginBottom: 8 }}>🔍</ThemedText>
            <ThemedText type="muted">No recipes found</ThemedText>
          </View>
        )}
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 24, paddingTop: 60, paddingBottom: 16 },
  searchBar: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingHorizontal: 14, paddingVertical: 12, borderRadius: 14, borderWidth: 1, gap: 10, marginBottom: 16 },
  searchInput: { flex: 1, fontSize: 14 },
  catScroll: { marginBottom: 20 },
  catPill: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12 },
  catText: { fontSize: 13, fontWeight: '600' },
  section: { marginBottom: 24 },
  sectionTitle: { marginBottom: 12, paddingHorizontal: 20 },
  featCard: { width: 160, padding: 16, borderRadius: 18, borderWidth: 1, alignItems: 'center' },
  featMeta: { flexDirection: 'row', gap: 4, marginTop: 6 },
  recipeCard: { flexDirection: 'row', padding: 14, borderRadius: 16, borderWidth: 1, marginBottom: 10, gap: 14 },
  recipeEmoji: { width: 70, height: 70, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  recipeContent: { flex: 1, justifyContent: 'center' },
  recipeMetaRow: { flexDirection: 'row', gap: 12, marginTop: 4 },
  recipeMeta: { flexDirection: 'row', alignItems: 'center', gap: 3 },
  recipeMetaText: { fontSize: 11 },
  macroMini: { flexDirection: 'row', gap: 6, marginTop: 8 },
  macroPill: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  empty: { alignItems: 'center', paddingVertical: 40 },
});
