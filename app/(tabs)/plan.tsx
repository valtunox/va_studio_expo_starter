import { useState } from 'react';
import { StyleSheet, ScrollView, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { useAppTheme } from '@/hooks/useAppTheme';
import { MEAL_PLAN, DAYS } from '@/constants/MockData';

const DAY_KEYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;

function PlanMealCard({ meal, colors }: { meal: any; colors: any }) {
  const typeColors: Record<string, string> = {
    breakfast: colors.mealBreakfast,
    lunch: colors.mealLunch,
    dinner: colors.mealDinner,
    snack: colors.mealSnack,
  };
  const color = typeColors[meal.type] || colors.tint;

  return (
    <View style={[s.mealCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={[s.mealStripe, { backgroundColor: color }]} />
      <View style={[s.mealEmoji, { backgroundColor: color + '15' }]}>
        <ThemedText style={{ fontSize: 24 }}>{meal.emoji}</ThemedText>
      </View>
      <View style={{ flex: 1 }}>
        <ThemedText type="muted" style={{ fontSize: 10, textTransform: 'uppercase', fontWeight: '700', color, letterSpacing: 1 }}>
          {meal.type}
        </ThemedText>
        <ThemedText type="defaultSemiBold" style={{ fontSize: 14, marginTop: 2 }}>{meal.name}</ThemedText>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <ThemedText style={{ fontWeight: '800', fontSize: 16 }}>{meal.calories}</ThemedText>
        <ThemedText type="muted" style={{ fontSize: 10 }}>kcal</ThemedText>
      </View>
    </View>
  );
}

export default function PlanScreen() {
  const { colors } = useAppTheme();
  const [selectedDay, setSelectedDay] = useState(0);

  const dayKey = DAY_KEYS[selectedDay];
  const meals = MEAL_PLAN[dayKey] || [];
  const totalCal = meals.reduce((s: number, m: any) => s + m.calories, 0);

  return (
    <ScrollView style={[s.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
      <View style={s.header}>
        <ThemedText type="title" style={{ fontSize: 28 }}>Meal Plan</ThemedText>
        <ThemedText type="muted" style={{ marginTop: 4 }}>Plan your week ahead</ThemedText>
      </View>

      {/* Day selector */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 8, paddingBottom: 4 }}>
        {DAYS.map((day, i) => {
          const isActive = i === selectedDay;
          return (
            <Pressable key={day} onPress={() => setSelectedDay(i)}
              style={[
                s.dayPill,
                isActive
                  ? { backgroundColor: colors.tint }
                  : { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 },
              ]}>
              <ThemedText style={[s.dayAbbr, { color: isActive ? '#fff' : colors.textSecondary }]}>
                {day}
              </ThemedText>
              <ThemedText style={[s.dayNum, { color: isActive ? '#fff' : colors.text }]}>
                {i + 7}
              </ThemedText>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Summary card */}
      <View style={[s.summaryCard, { backgroundColor: colors.tint + '12', borderColor: colors.tint + '20' }]}>
        <View style={{ flex: 1 }}>
          <ThemedText type="muted" style={{ fontSize: 12 }}>
            {DAY_KEYS[selectedDay].charAt(0).toUpperCase() + DAY_KEYS[selectedDay].slice(1)}
          </ThemedText>
          <ThemedText type="defaultSemiBold" style={{ fontSize: 18, marginTop: 2 }}>
            {meals.length} meals planned
          </ThemedText>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <ThemedText style={{ fontWeight: '900', fontSize: 28, color: colors.tint }}>{totalCal}</ThemedText>
          <ThemedText type="muted" style={{ fontSize: 11 }}>total kcal</ThemedText>
        </View>
      </View>

      {/* Meals */}
      <View style={s.section}>
        {meals.map((meal: any, i: number) => (
          <PlanMealCard key={i} meal={meal} colors={colors} />
        ))}
      </View>

      {/* Add meal button */}
      <Pressable style={[s.addMealBtn, { borderColor: colors.tint + '40' }]}>
        <Ionicons name="add-circle-outline" size={20} color={colors.tint} />
        <ThemedText style={{ fontSize: 14, fontWeight: '600', color: colors.tint }}>Add Meal</ThemedText>
      </Pressable>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 24, paddingTop: 60, paddingBottom: 20 },
  dayPill: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 14, minWidth: 52 },
  dayAbbr: { fontSize: 11, fontWeight: '600' },
  dayNum: { fontSize: 18, fontWeight: '800', marginTop: 2 },
  summaryCard: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 20, padding: 18, borderRadius: 18, borderWidth: 1 },
  section: { paddingHorizontal: 20, marginTop: 20 },
  mealCard: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderRadius: 16, borderWidth: 1, marginBottom: 10, overflow: 'hidden' },
  mealStripe: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, borderTopLeftRadius: 16, borderBottomLeftRadius: 16 },
  mealEmoji: { width: 48, height: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  addMealBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginHorizontal: 20, marginTop: 8, paddingVertical: 14, borderRadius: 14, borderWidth: 1.5, borderStyle: 'dashed' },
});
